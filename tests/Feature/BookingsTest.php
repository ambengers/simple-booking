<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\Room;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BookingsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->withoutExceptionHandling();
    }

    /** @test */
    public function can_list_bookings()
    {
        $b1 = Booking::factory()->create();
        $b2 = Booking::factory()->create();
        $b3 = Booking::factory()->create();

        $this->getJson(route('bookings.index'))
            ->assertJsonFragment(['id' => $b1->id])
            ->assertJsonFragment(['id' => $b2->id])
            ->assertJsonFragment(['id' => $b3->id]);
    }

    /** @test */
    public function cannot_store_a_booking_if_unauthenticated()
    {
        $this->withExceptionHandling();

        $this->postJson(route('bookings.store'))
            ->assertStatus(401);
    }

    /** @test */
    public function can_store_bookings()
    {
        $this->actingAs($user = User::factory()->create());

        $this->withExceptionHandling();

        $room = Room::factory()->create();

        $this->postJson(route('bookings.store'), [
            'room' => $room->id,
            'date' => $date = Carbon::now()->addDays(2)->startOfDay()->format('Y-m-d'),
            'from' => $from = Carbon::now()->addDays(2)->startOfDay()->addHour(10)->format('H:i'),
            'to' => $to = Carbon::now()->addDays(2)->startOfDay()->addHours(15)->format('H:i'),
        ]);

        $this->assertDatabaseHas('bookings', [
            'room_id' => $room->id,
            'date' => Carbon::now()->addDays(2)->startOfDay()->format('Y-m-d H:i:s'),
            'from' => Carbon::now()->addDays(2)->startOfDay()->addHour(10)->format('Y-m-d H:i:s'),
            'to' => Carbon::now()->addDays(2)->startOfDay()->addHours(15)->format('Y-m-d H:i:s'),
            'created_by' => $user->id,
        ]);
    }

    /** @test */
    public function can_get_booking_details()
    {
        $booking = Booking::factory()->create();

        $this->getJson(
            route('bookings.show', ['booking' => $booking->id])
        )->assertJsonFragment(['id' => $booking->id]);
    }

    /** @test */
    public function cannot_update_a_booking_if_unauthenticated()
    {
        $this->withExceptionHandling();

        $booking = Booking::factory()->create();

        $this->patchJson(route('bookings.update', ['booking' => $booking->id]))
            ->assertStatus(401);
    }

    /** @test */
    public function cannot_update_a_booking_that_user_do_not_own()
    {
        $this->withExceptionHandling();

        $booking = Booking::factory()->create();

        $this->actingAs($user = User::factory()->create());

        $this->patchJson(route('bookings.update', ['booking' => $booking->id]))
            ->assertStatus(403);
    }

    /** @test */
    public function can_update_a_booking()
    {
        $this->actingAs($user = User::factory()->create());

        $booking = Booking::factory()->create(['created_by' => $user->id]);

        $this->patchJson(route('bookings.update', ['booking' => $booking->id]), [
            'room' => $booking->room_id,
            'date' => $date = Carbon::now()->addDays(2)->startOfDay()->format('Y-m-d'),
            'from' => $from = Carbon::now()->addDays(2)->startOfDay()->addHour(10)->format('H:i'),
            'to' => $to = Carbon::now()->addDays(2)->startOfDay()->addHours(15)->format('H:i'),
        ]);

        $this->assertDatabaseHas('bookings', [
            'room_id' => $booking->room_id,
            'date' => Carbon::now()->addDays(2)->startOfDay()->format('Y-m-d H:i:s'),
            'from' => Carbon::now()->addDays(2)->startOfDay()->addHour(10)->format('Y-m-d H:i:s'),
            'to' => Carbon::now()->addDays(2)->startOfDay()->addHours(15)->format('Y-m-d H:i:s'),
            'created_by' => $user->id,
        ]);
    }

    /** @test */
    public function cannot_delete_a_booking_that_user_do_not_own()
    {
        $this->withExceptionHandling();

        $this->actingAs($user = User::factory()->create());

        $booking = Booking::factory()->create();

        $this->deleteJson(route('bookings.destroy', ['booking' => $booking->id]))
            ->assertStatus(403);
    }

    /** @test */
    public function can_delete_a_booking()
    {
        $this->actingAs($user = User::factory()->create());

        $booking = Booking::factory()->create(['created_by' => $user->id]);

        $this->deleteJson(route('bookings.destroy', ['booking' => $booking->id]));

        $this->assertDatabaseMissing('bookings', ['id' => $booking->id]);
    }
}
