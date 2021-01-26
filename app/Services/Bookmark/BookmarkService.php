<?php

namespace App\Services\Bookmark;
use App\Helpers\Url;
use App\Http\Requests\API\Bookmark\IndexRequest;
use App\Http\Requests\API\Bookmark\StoreRequest;
use App\Models\Bookmark;
use App\Repositories\BookmarkRepository;
use App\Services\Bookmark\Contracts\Parser;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class BookmarkService
{
    /**
     * Bookmark repository.
     *
     * @var \App\Repositories\BookmarkRepository
     */
    private $repository;

    /**
     * Create a new CRUD service instance.
     *
     * @param \App\Repositories\BookmarkRepository $repository
     * @return void
     */
    public function __construct(BookmarkRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Store new bookmark.
     *
     * @param \App\Http\Requests\API\Bookmark\StoreRequest $request
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
     * Get bookmarks list collection.
     *
     * @param \App\Http\Requests\API\Bookmark\IndexRequest $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getList(IndexRequest $request): LengthAwarePaginator
    {
        $sortConfig = $request->exists('sort_field') ? [
            'field' => $request->sort_field,
            'type' => $request->sort_type
        ] : [];
        return $this->repository->getList($sortConfig);
    }

    /**
     * Get bookmark by id.
     *
     * @param int $id
     * @return \App\Models\Bookmark
     */
    public function getItem(int $id): Bookmark
    {
        return $this->repository->getItem($id);
    }

    /**
     * Get bookmarks list collection for excel file.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getExcelList(): Collection
    {
        return $this->repository->getExcelList();
    }

    /**
     * Destroy bookmark by id.
     *
     * @param int $id
     * @return void
     */
    public function destroyById(int $id): void
    {
        $this->repository->destroy($id);
    }
}
