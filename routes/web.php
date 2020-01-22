<?php

Route::any('{all}', 'HomeController@index')->where('all', '^(?!api).*$');

