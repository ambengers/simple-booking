<?php

namespace Tests\Feature;

use App\Filters\BookingFilters;
use App\Models\Booking;
use App\Models\Room;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tests\Traits\InteractsWithQueryFilters;

class BookingFiltersTest extends TestCase
{
    use RefreshDatabase, InteractsWithQueryFilters;

    protected function setUp() : void
    {
        parent::setUp();

        $this->withoutExceptionHandling();
    }

    /** @test */
    public function can_be_filtered_by_rooms()
    {
        $room1 = Room::factory()->create();
        $room2 = Room::factory()->create();

        $b1 = Booking::factory()->create(['room_id' => $room1->id]);
        $b2 = Booking::factory()->create(['room_id' => $room1->id]);
        $b3 = Booking::factory()->create(['room_id' => $room2->id]);

        $data = $this->setRequestFilters(
            Booking::class,
            BookingFilters::class,
            ['room' => $room1->id]
        );

        $this->setResponseContent($data)
            ->assertJsonFragment(['id' => $b1->id])
            ->assertJsonFragment(['id' => $b2->id])
            ->assertJsonMissing(['id' => $b3->id]);
    }

    /** @test */
    public function can_be_filtered_by_creator()
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();

        $b1 = Booking::factory()->create(['created_by' => $user1->id]);
        $b2 = Booking::factory()->create(['created_by' => $user1->id]);
        $b3 = Booking::factory()->create(['created_by' => $user2->id]);

        $data = $this->setRequestFilters(
            Booking::class,
            BookingFilters::class,
            ['creator' => $user2->id]
        );

        $this->setResponseContent($data)
            ->assertJsonMissing(['id' => $b1->id])
            ->assertJsonMissing(['id' => $b2->id])
            ->assertJsonFragment(['id' => $b3->id]);
    }
}
