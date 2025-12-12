<?php

namespace App\Http\Controllers;

use App\Models\appointment;
use App\Http\Requests\StoreappointmentRequest;
use App\Http\Requests\UpdateappointmentRequest;
use Illuminate\Http\Request;

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

    public function myAppointment(Request $request)
    {
        try {
            return $request->user()->appointments()->get();
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreappointmentRequest $request)
    {
        try {
            $data = $request->validated();
            $request->user()->appointments()->create($data);
            return ['message' => 'done'];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateappointmentRequest $request, appointment $appointment)
    {
        try {
            $data = $request->validated();
            $appointment->update($data);
            return ['message' => 'done'];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(appointment $appointment)
    {
        try {
            $appointment->delete();
            return ['message' => 'done'];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
