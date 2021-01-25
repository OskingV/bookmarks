<?php

namespace App\Http\Resources\API\Bookmark;

use App\Helpers\Arr;

class ItemResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $unmodifiedFields = Arr::fillArrayByObject([
            'meta_description',
            'meta_keywords'
        ], $this);
        $array = array_merge(parent::toArray($request), $unmodifiedFields);
        return $array;
    }
}
