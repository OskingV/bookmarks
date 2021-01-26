<?php

namespace App\Http\Controllers\API\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponser
{
    /**
     * Return success response.
     *
     * @param int $code
     * @return JsonResponse
     */
    protected function successResponse(int $code): JsonResponse
    {
        return response()->json([
            'message' => 'ok'
        ], $code);
    }
}
