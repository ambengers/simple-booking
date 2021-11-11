<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class AuthenticatedUsersController extends Controller
{
    public function handle()
    {
        return new UserResource(Auth::user());
    }
}
