<?php

namespace App\Http\Controllers\API\Bookmark;

use App\Http\Controllers\API\Controller;
use App\Http\Resources\API\Bookmark\ListResource;
use App\Services\Bookmark\BookmarkService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class IndexController extends Controller
{
    /**
     * Return bookmarks list.
     *
     * @param \App\Services\Bookmark\BookmarkService $service
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function __invoke(BookmarkService $service): AnonymousResourceCollection
    {
        $bookmarks = app()->call([$service, 'getList']);
        return ListResource::collection($bookmarks);
    }
}
