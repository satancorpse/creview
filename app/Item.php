<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['name', 'cook_id', 'publish'];

    protected $with = ['cook'];

    public function reviews() {
        return $this->hasMany('App\Review');
    }

    public function cook() {
        return $this->belongsTo('App\Cook');
    }
}
