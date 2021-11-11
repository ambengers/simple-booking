<?php

namespace App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class LessThanDateTime implements Rule
{
    protected $date;

    protected $time;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($date, $time)
    {
        $this->date = $date;
        $this->time = $time;
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
        $value = Carbon::create("{$this->date} {$value}");
        $comparison = Carbon::create("{$this->date} {$this->time}");

        return $value->lt($comparison);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        $comparison = Carbon::create("{$this->date} {$this->time}")->format('Y-m-d H:i');

        return "The :attribute must be less than {$comparison}.";
    }
}
