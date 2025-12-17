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
            $statut = 'approved';
            $appointment->update(['statut' => $statut]);

            return response()->json(['message' => 'Appointment approved successfully']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    public function reject(Appointment $appointment)
    {
        try {
            $statut = 'rejected';
            $appointment->update(['statut' => $statut]);

            return response()->json(['message' => 'Appointment rejected successfully']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
