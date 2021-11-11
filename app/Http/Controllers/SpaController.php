<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function handle(Request $request)
    {
        return view('layouts.app');
    }
}
