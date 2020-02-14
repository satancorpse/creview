<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Item;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{
    public function index() {

        $items = Item::latest()->with(['reviews', 'cook'])->get();

        return response()->json($items, 200);
    }

    public function show($id) {

        $item = Item::findOrFail($id)->load('reviews.user', 'cook');

        return response()->json($item, 200);
    }

    public function store(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:350',
            'cook_id' => 'required|exists:cooks,id',
        ]);

        $item = Item::create($validatedData)->load('cook');

        return response()->json($item, 200);
    }

    public function update(Request $request, Item $item) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:350',
            'cook_id' => 'required|exists:cooks,id',
            'publish' => 'boolean'
        ]);

        if( $item->publish === 0) {
            return response()->json(['message' => 'Unprocessable Request! Closed items cannot be modified, or should it be?'], 422);
        }

        $item->update($validatedData);

        return response()->json($item->load('cook'), 201);
    }

    public function destroy(Item $item) {

        $item->delete();

        return response()->json('Deleted!', 200);
    }

}
