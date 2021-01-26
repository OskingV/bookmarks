<?php

namespace App\Http\Controllers\API\Bookmark;

use App\Exports\BookmarksExport;
use App\Http\Controllers\API\Controller;
use App\Services\Bookmark\BookmarkService;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ExcelController extends Controller
{
    /**
     * Return excel file with bookmarks.
     *
     * @param \App\Services\Bookmark\BookmarkService $repository
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function __invoke(BookmarkService $service): BinaryFileResponse
    {
        $bookmarks = $service->getExcelList();
        return (new BookmarksExport($bookmarks))->download('bookmarks.xlsx');
    }
}
