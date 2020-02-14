<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp;

use Illuminate\Support\Facades\Hash;
use App\User;
use App\Item;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function authUser() {
        return response()->json(auth()->user());
    }

    public function getUsers() {

        $users = User::latest()->get();

        return response()->json($users, 200);
    }

    public function profile($id) {

        $user = User::findOrFail($id)->load('reviews');

        foreach($user->reviews as $review) {
            $item_id = $review->item_id;
            $review->item = Item::findOrFail($item_id)->load('cook');
        }

        return response()->json($user);
    }

    public function login(Request $request) {

        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if( !Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => 'Unauthorized! Incorrect credentials'], 403);
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

    public function update(Request $request, $id) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:350',
            'email' => 'required|string|email|max:255|unique:users,email,'.$id,
            'role' => 'required|between:0,2|numeric'
        ]);

        $user = User::findOrFail($id);

        if(Auth::user()->role !== 1 || $user->role === 1) {
            $validatedData['role'] = $user->role;
        }

        //unauthorized if the logged in user is not an admin or super-admin and tries to edit admin/super-admin or user other than him
        if(Auth::user()->id !== $id && Auth::user()->role !== 1 && Auth::user()->role !== 2) {
            return response()->json('Unauthorized!', 401);
        }

        //unauthorized if the user is not super-admin and tries to edit a super-admin or assign a super-admin role to any user
        if($user->role === 1 && Auth::user()->role !== 1) {
            return response()->json('Unauthorized!', 401);
        }

        //unauthorized if the user is not an admin or a super-admin and tries to edit the admin or assign admin role to any user
        if($user->role === 2 && Auth::user()->role !== 2 && Auth::user()->role !== 1) {
            return response()->json('Unauthorized!', 401);
        }

        //proceed to updating the user
        $user->update($validatedData);

        return response()->json($user, 201);
    }

    public function destroy(User $user) {

        if(Auth::user()->role !== 1 && Auth::user()->role !== 2) {
            return response()->json('Unauthorized!', 401);
        }

        if($user->role === 1) {
            return response()->json('Unauthorized!', 401);
        }

        if($user->role === 2 && Auth::user()->role !== 1) {
            return response()->json('Unauthorized!', 401);
        }

        $user->delete();

        return response()->json('Removed!', 200);
    }

    public function logout() {

        auth()->user()->tokens->each(function($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out succesfully!', 200);
    }
}
