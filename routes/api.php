<?php

Route::get('/users', 'AuthController@getUsers');
Route::post('/login', 'AuthController@login');
Route::post('/users/register', 'AuthController@register');
Route::middleware('auth:api')->post('/logout', 'AuthController@logout');

Route::get('/cooks', 'CookController@index');
Route::post('/cooks/create', 'CookController@store');
Route::patch('/cooks/{cook}', 'CookController@update');
Route::delete('/cooks/{cook}', 'CookController@destroy');

Route::get('/items', 'ItemController@index');
Route::get('/items/{id}/reviews', 'ItemController@show');
Route::post('/items/create', 'ItemController@store');
Route::patch('/items/{item}', 'ItemController@update');
Route::delete('/items/{item}', 'itemController@destroy');

Route::get('/reviews', 'ReviewController@index');
Route::post('/reviews/create', 'ReviewController@store');
Route::patch('/reviews/{review}', 'ReviewController@update');
Route::delete('/reviews/{review}', 'ReviewController@destroy');
