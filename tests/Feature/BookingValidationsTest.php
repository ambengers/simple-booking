<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\Room;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BookingValidationsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();

        $this->actingAs($this->user);
    }

    /** @test */
    public function booking_schedule_cannot_have_an_overlap()
    {
        $room = Room::factory()->create();

        $date = Carbon::now()->startOfDay();
        $from = Carbon::now()->startOfDay()->addHours(2);
        $to = Carbon::now()->startOfDay()->addHours(10);

        $booking = Booking::factory()->create([
            'room_id' => $room->id,
            'created_by' => $this->user->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(2),
            'to' => Carbon::now()->startOfDay()->addHours(10),
        ]);

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(3)->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(5)->format('H:i'),
        ])->assertStatus(422);
    }

    /** @test */
    public function from_must_be_less_than_to()
    {
        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(10)->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(5)->format('H:i'),
        ])->assertStatus(422);
    }

    /** @test */
    public function to_must_be_greater_than_from()
    {
        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(10)->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(5)->format('H:i'),
        ])->assertStatus(422);
    }

    /** @test */
    public function from_date_must_begin_at_8_am()
    {
        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(5)->format('H:i'),
        ])->assertStatus(422);
    }

    /** @test */
    public function to_date_must_end_at_5_am()
    {
        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(9)->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(19)->format('H:i'),
        ])->assertStatus(422);
    }

    /** @test */
    public function date_must_be_in_the_future()
    {
        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => Carbon::now()->startOfDay()->format('Y-m-d'),
            'from' => Carbon::now()->startOfDay()->addHours(9)->format('H:i'),
            'to' => Carbon::now()->startOfDay()->addHours(15)->format('H:i'),
        ])->assertStatus(422);
    }
}
