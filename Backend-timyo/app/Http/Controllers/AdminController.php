<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class AdminController extends Controller
{
    public function approve(Appointment $appointment)
    {
        try {
            $status = 'approved';
            $appointment->update(['status' => $status]);

            return response()->json(['message' => 'Appointment approved successfully']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    public function reject(Appointment $appointment)
    {
        try {
            $status = 'rejected';
            $appointment->update(['status' => $status]);

            return response()->json(['message' => 'Appointment rejected successfully']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
