<?php

namespace App\Http\Controllers\API\Bookmark;

use App\Http\Controllers\Controller;
use App\Http\Resources\API\Bookmark\ItemResource;
use App\Services\Bookmark\BookmarkService;

class ShowController extends Controller
{
    /**
     *
     * Return bookmark info by id.
     *
     * @param $bookmarkId
     * @param BookmarkService $service
     *
     * @return ItemResource
     */
    public function __invoke($bookmarkId, BookmarkService $service): ItemResource
    {
        $bookmark = $service->getItem($bookmarkId);
        return new ItemResource($bookmark);
    }
}
