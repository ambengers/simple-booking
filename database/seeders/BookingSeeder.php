<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (! Room::count()) {
            (new RoomSeeder)->run();
        }
        if (! User::count()) {
            (new UserSeeder)->run();
        }

        $rooms = Room::all();
        $users = User::all();


        for ($i = 1; $i <= 100; $i++) {
            Booking::factory()->create([
                'room_id' => $rooms->pluck('id')->random(),
                'created_by' => $users->pluck('id')->random(),
            ]);
        }
    }
}
