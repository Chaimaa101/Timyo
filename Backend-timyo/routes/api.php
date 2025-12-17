<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth:sanctum'])->group(function () {
   Route::get('/user', [AuthController::class, 'me']);
    

    route::get('/Myappointments', [AppointmentController::class,'myAppointments']);
    route::post('/appointments', [AppointmentController::class,'store']);
    route::put('/appointments/{appointment}', [AppointmentController::class,'update']);
    route::delete('/appointments/{appointment}', [AppointmentController::class,'destroy']);

});

Route::middleware(['auth:sanctum','isAdmin'])->group(function () {
    
    route::get('/appointments', [AppointmentController::class,'index']);

    route::put('/appointments/{appointment}/approve', [  AdminController::class,'approve']);
    route::put('/appointments/{appointment}/reject', [  AdminController::class,'reject']);

route::apiResource('users', UserController::class);
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
