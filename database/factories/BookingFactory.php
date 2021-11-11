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
            'date' => Carbon::now()->format('d-m-Y'),
            'to' => Carbon::now()->format('H:i'),
            'from' => Carbon::now()->addHour()->format('H:i'),
            'created_by' => User::factory(),
        ];
    }
}
