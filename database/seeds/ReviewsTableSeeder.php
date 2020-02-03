<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->insert([
            'score' => 5,
            'meta' => '{"type": ["Taste", "Authantacity"], "other": "gg"}',
            'feedback' => 'Random Feedback 1',
            'user_id' => 1,
            'item_id' => 1,
        ]);

        DB::table('reviews')->insert([
            'score' => 4,
            'meta' => '{"type": ["Taste", "Authantacity", "Quality"], "other": "gg"}',
            'feedback' => 'Random Feedback 2',
            'user_id' => 2,
            'item_id' => 1,
        ]);

        DB::table('reviews')->insert([
            'score' => 3,
            'meta' => '{"type": ["Taste", "Quality"], "other": "gg"}',
            'feedback' => 'Random Feedback 3',
            'user_id' => 3,
            'item_id' => 1,
        ]);

        DB::table('reviews')->insert([
            'score' => 2,
            'meta' => '{"type": ["Taste", "Authantacity"], "other": "gg"}',
            'feedback' => 'Random Feedback 4',
            'user_id' => 4,
            'item_id' => 1,
        ]);

        DB::table('reviews')->insert([
            'score' => 3,
            'meta' => '{"type": ["Taste", "Quality"], "other": "gg"}',
            'feedback' => 'Random Feedback 5',
            'user_id' => 5,
            'item_id' => 1,
        ]);
    }
}
