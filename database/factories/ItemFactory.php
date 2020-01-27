<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Item;
use Faker\Generator as Faker;

$factory->define(Item::class, function (Faker $faker) {
    return [
        'name' => $faker->realText(35),
        'cook_id' => factory(App\Cook::class),
        'publish' => (bool)random_int(0, 1),
    ];
});
