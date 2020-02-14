<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(Item $item) {
        return $item->testing(5);
    }
}
