<?php

namespace App\Http\Requests;

use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->method() == 'PATCH') {
            return $this->booking->created_by == Auth::id();
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'room' => [
                'required',
                Rule::exists('rooms', 'id'),
            ],

            'date' => [
                'required',
                'date_format:Y-m-d',
            ],

            'to' => [
                'required',
                'date_format:H:i',
            ],

            'from' => [
                'required',
                'date_format:H:i',
            ],
        ];
    }

    public function persist(Booking $booking = null)
    {
        $booking = $booking ?? new Booking;

        $booking->room_id = $this->room;
        $booking->date = $this->date;
        $booking->from = Carbon::create("{$this->date} {$this->from}");
        $booking->to = Carbon::create("{$this->date} {$this->to}");
        $booking->created_by = Auth::id();

        $booking->save();

        return $booking->fresh();
    }
}
