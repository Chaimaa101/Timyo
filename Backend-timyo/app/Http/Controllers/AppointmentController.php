<?php

namespace App\Http\Controllers;

use App\Models\appointment;
use App\Http\Requests\StoreappointmentRequest;
use App\Http\Requests\UpdateappointmentRequest;
use PhpParser\Node\Stmt\TryCatch;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return appointment::with('user')->get();
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function myAppointment()
    {
        //
    }

 
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreappointmentRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(appointment $appointment)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateappointmentRequest $request, appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(appointment $appointment)
    {
        //
    }
}
