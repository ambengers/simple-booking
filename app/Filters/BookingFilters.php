<?php

namespace App\Filters;

use Ambengers\QueryFilter\AbstractQueryFilter;
use App\Loaders\BookingLoaders;

class BookingFilters extends AbstractQueryFilter
{
    /**
     * Relationship loader class.
     *
     * @var string
     */
    protected $loader = BookingLoaders::class;

    /**
     * Columns that are searchable.
     *
     * @var array
     */
    protected $searchableColumns = [
        'room' => ['name'],
    ];

    /**
     * List of object filters.
     *
     * @var array
     */
    protected $filters = [
        'room' => \App\Filters\Booking\Room::class,
    ];
}
