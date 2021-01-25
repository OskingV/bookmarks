<?php

namespace App\Services\Bookmark;
use App\Helpers\Url;
use App\Http\Requests\API\Bookmark\IndexRequest;
use App\Http\Requests\API\Bookmark\StoreRequest;
use App\Models\Bookmark;
use App\Repositories\BookmarkRepository;
use App\Services\Site\Contracts\Parser;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class BookmarkService
{
    /**
     *
     * Bookmark repository.
     *
     * @var BookmarkRepository
     */
    private $repository;

    /**
     * Create a new CRUD service instance.
     *
     * @param BookmarkRepository $repository
     */
    public function __construct(BookmarkRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     *
     * Store new bookmark.
     *
     * @param StoreRequest $request
     *
     * @return Bookmark
     */
    public function store(StoreRequest $request, Parser $parser): Bookmark
    {
        $url = $request->url;
        $parsedData = $parser->parse($url);
        $baseUrl = Url::getBaseUrl($url);
        if ($parsedData['favicon'] === '') {
            $parsedData['favicon_url'] = $baseUrl . '/favicon.ico';
        } elseif (!Url::isUrl($parsedData['favicon'])) {
            $parsedData['favicon_url'] = ($baseUrl . $parsedData['favicon']);
        } else {
            $parsedData['favicon_url'] = $parsedData['favicon'];
        }
        $parsedData['url'] = $url;
        $bookmark = $this->repository->store($parsedData);
        return $bookmark;
    }

    /**
     *
     * Get bookmarks list collection.
     *
     * @param IndexRequest $request
     *
     * @return LengthAwarePaginator
     */
    public function getList(IndexRequest $request): LengthAwarePaginator
    {
        return $this->repository->getList();
    }

    /**
     *
     * Get bookmark by id.
     *
     * @param int $id
     *
     * @return Bookmark
     */
    public function getItem(int $id): Bookmark
    {
        return $this->repository->getItem($id);
    }
}
