<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index() {

        $reviews = Review::all();

        return response()->json($reviews, 200);
    }

    public function store(Request $request) {

        $validatedData = $request->validate([
            'score' => 'required|between:1,5|numeric',
            'meta' => 'required|json|max:5500',
            'feedback' => 'required|string|max:1000',
            'user_id' => 'required|exists:users,id',
            'item_id' => 'required|exists:items,id'
        ]);

        Review::create($validatedData);

        return response()->json('Review submitted!', 201);
    }

    public function update(Request $request, Review $review) {

        $validatedData = $request->validate([
            'score' => 'required|between:1,5|numeric',
            'meta' => 'required|string|max:500',
            'feedback' => 'required|string|max:1000',
            'user_id' => 'required|exists:users,id',
            'item_id' => 'required|exists:items,id'
        ]);

        $review->update($validatedData);

        return response()->json('Updated!', 201);
    }

    public function destroy(Review $review) {

        $review->delete();

        return response()->json('Review removed!', 200);
    }
}
