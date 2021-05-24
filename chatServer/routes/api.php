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

Route::post('/register','AuthController@register');
Route::post('/login','AuthController@login');
//Route::get('/services','ServiceController@getAll');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

   //login - logout
 Route::post('/logout','AuthController@logout');
 Route::post('/user','AuthController@getUser');

 //Services
  Route::get('/services/myservices','ServiceController@getByUserSession');
  Route::post('/services','ServiceController@store');
  Route::get('/services','ServiceController@getAll');
  Route::get('/services/{id}','ServiceController@getById');
  Route::post('/services/{id}','ServiceController@update');
  Route::post('/services/delete/{id}','ServiceController@destroy');

  //Chat
  Route::post('/chat','ChatController@createOrGetChat');
  Route::get('/chat/mychats','ChatController@getChatsUserSession');

  //Messages
  Route::get('/messages/{id}','MessageController@getMessagesByChatId');
  Route::post('/message/create','MessageController@createMessage');

});




