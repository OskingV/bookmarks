<?php

namespace App\Http\Controllers\API\Bookmark;

use App\Http\Controllers\API\Controller;
use App\Services\Bookmark\BookmarkService;
use Illuminate\Http\JsonResponse;

class DestroyController extends Controller
{
    /**
     * Destroy bookmark bi id.
     *
     * @param $bookmarkId
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(int $bookmarkId, BookmarkService $service): JsonResponse
    {
        $service->destroyById($bookmarkId);
        return $this->successResponse(200);
    }
}
