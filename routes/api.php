<?php

Route::middleware('auth:api')->group(function () {
    Route::get('/auth-user', 'AuthController@authUser');
    Route::get('/users', 'AuthController@getUsers');
    Route::get('/profile/{id}', 'AuthController@profile');
    Route::post('/users/register', 'AuthController@register')->middleware('scope:do_anything,can_update');
    Route::patch('/users/{id}', 'AuthController@update');
    Route::delete('/users/{user}', 'AuthController@destroy');
    Route::post('/logout', 'AuthController@logout');

    Route::get('/cooks', 'CookController@index');
    Route::get('/cooks/{id}', 'CookController@show');
    Route::post('/cooks/create', 'CookController@store')->middleware('scope:do_anything,can_update');
    Route::patch('/cooks/{cook}', 'CookController@update')->middleware('scope:do_anything,can_update');
    Route::delete('/cooks/{cook}', 'CookController@destroy')->middleware('scope:do_anything,can_update');

    Route::get('/items', 'ItemController@index');
    Route::get('/test/{id}', 'ItemController@test');
    Route::get('/items/{id}/reviews', 'ItemController@show');
    Route::post('/items/create', 'ItemController@store')->middleware('scope:do_anything,can_update');
    Route::patch('/items/{item}', 'ItemController@update')->middleware('scope:do_anything,can_update');
    Route::delete('/items/{item}', 'itemController@destroy')->middleware('scope:do_anything,can_update');

    Route::get('/reviews', 'ReviewController@index');
    Route::post('/reviews/create', 'ReviewController@store');
    Route::patch('/reviews/{review}', 'ReviewController@update')->middleware('scope:do_anything,can_update');
    Route::delete('/reviews/{review}', 'ReviewController@destroy')->middleware('scope:do_anything,can_update');

    Route::get('/test', 'TestController@test')->middleware('scope:do_anything,can_update');
});

Route::post('/login', 'AuthController@login');
