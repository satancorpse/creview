<?php

namespace App\Http\Controllers;

use App\Cook;
use Illuminate\Http\Request;

class CookController extends Controller
{
    public function index() {

        $cooks = Cook::latest()->get()->take(55);

        return response()->json($cooks, 200);
    }

    public function store(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|string|email|max:255|unique:cooks',
            'phone' => ['nullable', 'regex:/(01|8801)[0-9]{9}/', 'unique:cooks'],
        ]);

        $cook = Cook::create($validatedData);

        return response()->json('New cook\'s been created!', 200);
    }

    public function update(Request $request, Cook $cook) {

        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|string|email|max:255|unique:cooks,email,'.$cook->id,
            'phone' => ['nullable', 'regex:/(01|8801)[0-9]{9}/', 'between:11,13', 'unique:cooks,phone,'.$cook->id],
        ]);

        $cook->update($validatedData);

        return response()->json($cook, 201);
    }

    public function destroy(Cook $cook) {

        $cook->delete();

        return response()->json('Removed!', 200);
    }

}
