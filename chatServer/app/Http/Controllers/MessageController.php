<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;

class MessageController extends Controller
{
    public function getMessagesByChatId ($id) {
        $messages = Message::select('messages.*','users.name')
        ->join('users', 'messages.idAuthor', '=', 'users.id')
        ->where('messages.idChat', '=', $id)
        ->get();
        if($messages == "[]"){
         return response()->json([], 200);
     }else{
      return response()->json($messages, 200);
     }
    }

    public function createMessage (Request $request) {
        $request->request->add(['idAuthor' => Auth::user()->id]);
         $chat = Message::create($request->all());
         return response()->json($chat, 201);
    }
}
