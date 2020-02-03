<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Review;
use Faker\Generator as Faker;

$factory->define(Review::class, function (Faker $faker) {
    $meta = ['Taste', 'Quality', 'Presentation', 'Other'];
    return [
        'score' => random_int(1,5),
        'meta' => json_encode(implode(array_rand($meta, 3))),
        'feedback' => $faker->realText(50),
        'user_id' => factory(App\User::class),
        'item_id' => factory(App\Item::class),
    ];
});
