<?php

namespace App\Filters\Booking;

use Illuminate\Database\Eloquent\Builder;

class Creator
{
    /**
     * Handle the filtering.
     *
     * @param  Illuminate\Database\Eloquent\Builder $builder
     * @param  string|null  $value
     * @return Illuminate\Database\Eloquent\Builder
     */
    public function __invoke(Builder $builder, $value = null)
    {
        return $value
            ? $builder->where('created_by', $value)
            : $builder;
    }
}
