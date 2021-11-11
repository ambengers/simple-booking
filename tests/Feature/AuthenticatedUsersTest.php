<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticatedUsersTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_get_authenticated_users_details()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($user = User::factory()->create());

        $this->getJson(route('auth.user'))
            ->assertJsonFragment([
                'id' => $user->id,
                'full_name' => $user->full_name,
                'email' => $user->email
            ]);
    }
}
