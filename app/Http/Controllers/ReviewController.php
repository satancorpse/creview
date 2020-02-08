<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        if(Auth::user()->reviews()->where('item_id', $request->item_id)->exists()) {
            return response()->json(['message' => 'Feedback already submitted!'], 422);
        }

        if($request->user_id != Auth::user()->id) {
            return response()->json(['message' => 'Forbidden!'], 402);
        }

        $review = Review::create($validatedData);

        return response()->json($review->load('user'), 201);
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
