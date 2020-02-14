<?php

namespace App\Http\Controllers;

use App\Cook;
use Illuminate\Http\Request;

class CookController extends Controller
{
    public function index() {

        $cooks = Cook::latest()->get();

        return response()->json($cooks, 200);
    }

    public function show($id) {
        $cook = Cook::findOrFail($id)->load('items');
        return response()->json($cook);
    }

    public function store(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|string|email|max:255|unique:cooks',
            'phone' => ['nullable', 'regex:/(01)[0-9]{9}/', 'max:11','unique:cooks'],
        ]);

        $cook = Cook::create($validatedData);

        return response()->json($cook, 200);
    }

    public function update(Request $request, Cook $cook) {

        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|string|email|max:255|unique:cooks,email,'.$cook->id,
            'phone' => ['nullable', 'regex:/(01)[0-9]{9}/', 'max:11', 'unique:cooks,phone,'.$cook->id],
        ]);

        $cook->update($validatedData);

        return response()->json($cook, 201);
    }

    public function destroy(Cook $cook) {

        $cook->delete();

        return response()->json('Removed!', 200);
    }

}
