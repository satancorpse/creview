<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// use App\Item;
// use Illuminate\Support\Facades\Auth;

// class ItemController extends Controller
{
    public function index() {

        $items = Item::latest()->with(['reviews', 'cook'])->get();

        foreach ($items as $item) {
            //get count and avg of scores
            $score_count = collect($item->reviews)->count('score');
            $score_avg = collect($item->reviews)->avg('score');

            //get meta info for meta column
            $reviews_meta = [];

            $reviews = $item->reviews;

            foreach($reviews as $i) {
                $reviews_meta[] = Json_decode($i->meta, true);
            }

            $meta_array = [];

            foreach ($reviews_meta as $m) {
                foreach ($m['type'] as $n) {
                    $meta_array[] = $n;
                }
            }

            $count_meta = array_count_values($meta_array);
            arsort($count_meta);
            $meta_most = array_slice($count_meta, 0, 5, true);

            $meta_data = [
                'top_issue' => ['type' => key($meta_most), 'count' => reset($meta_most)],
                'meta_all' => $meta_most,
                'score_count' => $score_count,
                'score_avg' => round($score_avg, 2)
            ];

            $item->meta_data = $meta_data;
        }

        if(Auth::user()->role == 0) {
            $items = Item::where('publish', 1)->latest()->get();
        }

        return response()->json($items, 200);
    }

    public function show($id) {

        $item = Item::findOrFail($id)->load('reviews.user', 'cook');

        //get count and avg of scores
        $score_count = collect($item->reviews)->count('score');
        $score_avg = collect($item->reviews)->avg('score');

        //get meta info for meta column
        $reviews_meta = [];

        $reviews = $item->reviews;

        foreach($reviews as $i) {
            $reviews_meta[] = Json_decode($i->meta, true);
        }

        $meta_array = [];

        foreach ($reviews_meta as $m) {
            foreach ($m['type'] as $n) {
                $meta_array[] = $n;
            }
        }

        $count_meta = array_count_values($meta_array);
        arsort($count_meta);
        $meta_most = array_slice($count_meta, 0, 5, true);

        $meta_data = [
            'top_issue' => ['type' => key($meta_most), 'count' => reset($meta_most)],
            'meta_all' => $meta_most,
            'score_count' => $score_count,
            'score_avg' => round($score_avg, 2),
            'user_has_review' => Auth::user()->reviews()->where('item_id', $item->id)->exists()
        ];

        $item->meta_data = $meta_data;

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
