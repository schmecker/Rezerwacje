<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/UserDashboard', function () {
    return  Inertia::render('UserDashboard');
});


Route::get('/RoomReservationLanding', function () {
    return  Inertia::render('RoomReservationLanding');
});

Route::get('/RoomList', function () {
    return  Inertia::render('RoomList');
});
Route::get('/RoomDetails', function () {
    return  Inertia::render('RoomDetails');
});

Route::get('/Home', function () {
    return  Inertia::render('Home');
});


Route::get('/BookingConfirmation', function () {
    return  Inertia::render('BookingConfirmation');
});

Route::get('/AdminDashboard', function () {
    return  Inertia::render('AdminDashboard');
});


require __DIR__ . '/auth.php';
