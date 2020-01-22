<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['score', 'feedback', 'item_id', 'user_id'];

    protected $with = ['user', 'item'];

    public function item() {
        return $this->belongsTo('App\Item');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
