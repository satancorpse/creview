<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp;

use Illuminate\Support\Facades\Hash;

use App\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function authUser() {
        return response()->json(auth()->user());
    }

    public function getUsers() {

        $users = User::latest()->get()->take(5);

        return response()->json($users, 200);
    }

    public function login(Request $request) {

        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if( !Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json('Unauthorized', 403);
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
