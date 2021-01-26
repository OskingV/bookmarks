<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('bookmarks')
    ->group(function () {
        Route::post('', 'App\Http\Controllers\API\Bookmark\StoreController');
        Route::get('', 'App\Http\Controllers\API\Bookmark\IndexController');
        Route::get('excel', 'App\Http\Controllers\API\Bookmark\ExcelController');
        Route::get('{bookmark}', 'App\Http\Controllers\API\Bookmark\ShowController');
    });
