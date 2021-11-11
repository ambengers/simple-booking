<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Room::factory()->create(['name' => 'Small Room (5 pax)']);
        Room::factory()->create(['name' => 'Medium Room (10 pax)']);
        Room::factory()->create(['name' => 'Large Room (20 pax)']);
        Room::factory()->create(['name' => 'Hall (50 pax)']);
        Room::factory()->create(['name' => 'Conference (100 pax)']);
    }
}
