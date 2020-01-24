<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Item;

class ItemController extends Controller
{
    public function index() {

        $items = Item::all();
        return response()->json($items, 200);
    }

    public function store(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:350',
            'cook_id' => 'required|exists:cooks,id',
            'publish' => 'required'
        ]);

        $item = Item::create($validatedData)->load('cook');

        return response()->json($item, 200);
    }

    public function update(Request $request, Item $item) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:350',
            'cook_id' => 'required|exists:cooks,id'
        ]);

        $item->update($validatedData);

        return response()->json('Item\'s been updated successfully!', 201);
    }

    public function destroy(Item $item) {

        $item->delete();

        return response()->json('Deleted!', 200);
    }

}
