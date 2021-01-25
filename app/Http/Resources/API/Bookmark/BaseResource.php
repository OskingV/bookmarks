<?php

namespace App\Http\Resources\API\Bookmark;

use App\Helpers\Arr;
use Illuminate\Http\Resources\Json\JsonResource;

class BaseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $modifiedFields = [
            'created_at' => $this->created_at->format('H:i d.m.Y'),
            'favicon_url' => $this->url . $this->favicon_path
        ];
        $unmodifiedFields = Arr::fillArrayByObject([
            'id',
            'url',
            'title'
        ], $this);
        $array = array_merge($modifiedFields, $unmodifiedFields);
        return $array;
    }
}
