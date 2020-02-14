<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['name', 'cook_id', 'publish', 'closed'];

    public function reviews() {
        return $this->hasMany('App\Review');
    }

    public function cook() {
        return $this->belongsTo('App\Cook');
    }

    protected $appends = ['meta'];

    public function getMetaAttribute() {

        $meta = [];

        $meta['user_has_review'] = Auth::user()->reviews()->where('item_id', $this->id)->exists();
        $meta['reviews_count'] = $this->reviews->count();
        $meta['avg_score'] = round($this->reviews->avg('score'), 2);

        $var = $this->reviews->map(function($r) {
            return collect(json_decode($r->meta, true))->map(function($m) {
                return $m;
            });
        });

        $meta['top_issue'] = collect($var)->map(function($i) {
            return collect($i['type']);
        })->flatten()->countBy()->take(1);

        return $meta;
    }
}
