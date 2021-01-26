<?php

namespace App\Http\Requests\API\Bookmark;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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
            'sort_field' => 'required_with:sort_type|in:created_at,url,title',
            'sort_type' => 'required_with:sort_field|in:asc,desc',
            'search' => 'string|min:3'
        ];
    }
}
