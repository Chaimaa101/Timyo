<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreappointmentRequest;
use App\Http\Requests\UpdateappointmentRequest;
use App\Models\Appointment ;
use App\Notifications\NewAppointmentNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return Appointment::with('user')->get();
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function myAppointments(Request $request)
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
            $appointment = $request->user()->appointments()->create($data);

            $request->user()->notify(new NewAppointmentNotification($appointment));

            return ['message' => 'done'];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateappointmentRequest $request, Appointment $appointment)
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
    public function destroy(Appointment $appointment)
    {
        try {
            $appointment->delete();
            return ['message' => 'done'];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
