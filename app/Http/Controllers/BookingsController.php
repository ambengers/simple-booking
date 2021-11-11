<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Support\Facades\Auth;

class BookingsController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();

        return BookingResource::collection($bookings);
    }

    public function store(BookingRequest $request)
    {
        return new BookingResource($request->persist());
    }

    public function show(Booking $booking)
    {
        return new BookingResource($booking);
    }

    public function update(BookingRequest $request, Booking $booking)
    {
        return new BookingResource($request->persist($booking));
    }

    public function destroy(Booking $booking)
    {
        abort_if(! $booking->creator->is(Auth::user()), 403, 'Unauthorized!');

        $booking->delete();

        return response()->json([
            'message' => 'Resource has been successfully deleted!'
        ], 204);
    }
}
