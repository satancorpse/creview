<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp;

use Illuminate\Support\Facades\Hash;

use App\User;

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

    public function logout() {

        auth()->user()->tokens->each(function($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out succesfully!', 200);
    }
}
