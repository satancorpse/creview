<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cook extends Model
{
    protected $fillable = ['name', 'email', 'phone'];

    public function items() {
        return $this->hasMany('App\Item');
    }
}
