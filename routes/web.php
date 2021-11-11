<?php

use App\Http\Controllers\AuthenticatedUsersController;
use App\Http\Controllers\BookingsController;
use App\Http\Controllers\SpaController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/api/bookings', 'as' => 'bookings.'], function () {
    Route::get('/', [BookingsController::class, 'index'])->name('index');
    Route::get('{booking}', [BookingsController::class, 'show'])->name('show');

    Route::group(['middleware' => 'auth'], function () {
        Route::post('store', [BookingsController::class, 'store'])->name('store');
        Route::patch('{booking}/update', [BookingsController::class, 'update'])->name('update');
        Route::delete('{booking}/destroy', [BookingsController::class, 'destroy'])->name('destroy');
    });
});

Route::get('api/authenticated-user', [AuthenticatedUsersController::class, 'handle'])->name('auth.user');

Auth::routes();

Route::get('{any?}', [SpaController::class, 'handle'])->where('any', '.*');
