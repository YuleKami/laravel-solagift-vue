<?php

use App\Http\Controllers\Api\v1\NewsController;
use App\Http\Controllers\Api\v1\PostsController;
use App\Http\Controllers\Api\v1\RecallsController;
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

Route::resource('posts',PostsController::class);
Route::resource('news-post',NewsController::class);
Route::resource('recall',RecallsController::class);
