<?php

use App\Http\Controllers\BookingsController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'booking', 'as' => 'bookings.'], function () {
    Route::get('/', [BookingsController::class, 'index'])->name('index');
    Route::get('{booking}', [BookingsController::class, 'show'])->name('show');

    Route::group(['middleware' => 'auth'], function () {
        Route::post('store', [BookingsController::class, 'store'])->name('store');
        Route::patch('{booking}/update', [BookingsController::class, 'update'])->name('update');
        Route::delete('{booking}/destroy', [BookingsController::class, 'destroy'])->name('destroy');
    });
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
