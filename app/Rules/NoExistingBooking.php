<?php

namespace App\Rules;

use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class NoExistingBooking implements Rule
{
    protected $from;

    protected $to;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($date, $from, $to)
    {
        $this->from = Carbon::create("{$date} {$from}");
        $this->to = Carbon::create("{$date} {$to}");
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return ! Booking::where('room_id', $value)
            ->where('from', '<=', $this->from)
            ->where('to', '>=', $this->to)
            ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The selected :attribute has an overlapping booking.';
    }
}
