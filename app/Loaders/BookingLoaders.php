<?php

namespace App\Loaders;

use Ambengers\QueryFilter\AbstractQueryLoader;

class BookingLoaders extends AbstractQueryLoader
{
    /**
     * Relationships that can be lazy/eager loaded.
     *
     * @var array
     */
    protected $loadables = [
        'room','creator'
    ];
}
