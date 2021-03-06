<?php

namespace Database\Factories;

use App\Models\Room;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'room_id' => Room::factory(),
            'date' => Carbon::now(),
            'from' => Carbon::now(),
            'to' => Carbon::now()->addHour(),
            'created_by' => User::factory(),
        ];
    }
}
