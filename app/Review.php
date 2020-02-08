<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use function GuzzleHttp\json_decode;

class Review extends Model
{
    protected $fillable = ['score', 'meta','feedback', 'item_id', 'user_id'];

    // protected $with = ['user'];

    // public function getMetaAttribute($value)
    // {
    //     return json_encode($value, true);
    // }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
