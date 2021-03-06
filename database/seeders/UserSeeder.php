<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john.doe@example.com',
        ]);

        User::factory()->create([
            'first_name' => 'Marvin',
            'last_name' => 'Quezon',
            'email' => 'marvin.quezon@example.com',
        ]);
    }
}
