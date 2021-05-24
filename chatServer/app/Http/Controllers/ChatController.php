<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Chat;
use App\Models\services;
use Illuminate\Support\Facades\DB;
class ChatController extends Controller
{
    public function  getChatsUserSession () {
       $chats = Chat::select('chats.*', 'services.userName', 'users.name')
                ->join('services', 'chats.idService', '=', 'services.id')
                ->join('users', 'chats.idWriter', '=', 'users.id')
                ->where('chats.idWriter', '=', Auth::user()->id)->orwhere('chats.idReciever', '=', Auth::user()->id)
                ->get();

        if(is_null($chats)){
            return response()->json(['message' => 'Bandeja vacia'], 404);
        }else{
            return response()->json($chats, 200);
        }
    }

    public function createOrGetChat (Request $request) {
        $idService = $request->get('idService');
        $chat = Chat::where('idService', '=', $idService)->where('idWriter', '=', Auth::user()->id)->get();
        if($chat == "[]"){
            $service = services::where('id', '=', $idService);
            $objChat = ['title'=>$service->value('title'),
            'idService'=>$idService,
            'idWriter'=> Auth::user()->id,
            'idReciever'=>$service->value('idUser'), 
            ];
         
            $newChat = Chat::create($objChat);
            return response()->json($newChat, 201);

        }else{
            return response()->json($chat, 200);
        }

    }
}
