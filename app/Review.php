<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['score', 'meta','feedback', 'item_id', 'user_id'];

    protected $with = ['user'];

    // public function item() {
    //     return $this->belongsTo('App\Item');
    // }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
