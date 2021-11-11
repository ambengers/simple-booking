<?php

namespace Tests\Feature;

use App\Models\Room;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RoomsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->withoutExceptionHandling();
    }

    /** @test */
    public function can_list_rooms()
    {
        $r1 = Room::factory()->create();
        $r2 = Room::factory()->create();
        $r3 = Room::factory()->create();

        $this->getJson(route('rooms.index'))
            ->assertJsonFragment(['id' => $r1->id, 'name' => $r1->name])
            ->assertJsonFragment(['id' => $r2->id, 'name' => $r2->name])
            ->assertJsonFragment(['id' => $r3->id, 'name' => $r3->name]);
    }
}
