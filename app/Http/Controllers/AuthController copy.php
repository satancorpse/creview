<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp;

use Illuminate\Support\Facades\Hash;

use App\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function getUsers() {

        $users = User::latest()->get()->take(5);

        return response()->json($users, 200);
    }

    public function login(Request $request) {

        $http = new GuzzleHttp\Client;

        try {

            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password,
                ],
            ]);

            return json_decode((string) $response->getBody(), true);

        } catch(GuzzleHttp\Exception\BadResponseException $e) {

            if($e->getCode() === 400) {
                return response()->json('Invalid request. Provide a username or a password', $e->getCode());
            } elseif( $e->getCode() === 401) {
                return response()->json('Your credentials are incorrect. Please try again.', $e->getCode());
            }
            return response()->json('Something went wrong!');
        }
    }

    public function register(Request $request) {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

    }

    public function test(Request $request) {

        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if( !Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json('Unauthorized');
        }

        $user = $request->user();

        if( $user->role == 1) {
            $token_data = $user->createToken('Super Admin', ['do_anything', 'can_update', 'can_review']);
        } elseif ($user->role == 2) {
            $token_data = $user->createToken('Admin', ['can_update', 'can_review']);
        } else {
            $token_data = $user->createToken('Reviewer', ['can_review']);
        }

        $token = $token_data->token;

        if( $token->save() ) {

            return response()->json([
                'user' => $user,
                'access_token' => $token_data->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $token->scopes
            ]);

        } else {
            return response()->json('Something went wrong!');
        }
    }

    public function logout() {

        auth()->user()->tokens->each(function($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out succesfully!', 200);
    }
}
