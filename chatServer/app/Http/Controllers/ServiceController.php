<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\services;
class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
         return response()->json(services::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $request->request->add(['idUser' => Auth::user()->id]); 
       $request->request->add(['userName' => Auth::user()->name]); 
        $service = services::create($request->all());
        return response()->json($service, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getById($id)
    {
        $service = services::find($id);
        if(is_null($service)){
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }else{
         return response()->json($service, 200);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $service = services::find($id);
        if(is_null($service)){
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }else{
            $service->update($request->all());
            return response()->json($service, 200);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = services::find($id);
        if(is_null($service)){
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }else{
            $service->delete();
            return response()->json(null, 204);
        }

    }

    public function getByUserSession () {
       $services = services::where('idUser', '=', Auth::user()->id)->get();
       if(is_null($services)){
        return response()->json(['message' => 'Servicio no encontrado'], 404);
    }else{
     return response()->json($services, 200);
    }
    }
}
