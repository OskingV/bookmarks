<?php

namespace App\Repositories;

use App\Models\Bookmark;
use App\Models\Bookmark as Model;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class BookmarkRepository extends BaseRepository
{
    /**
     * Get model class.
     *
     * @return string
     */
    protected function getModelClass(): string
    {
        return Model::class;
    }

    /**
     * Store bookmark to DB.
     *
     * @param array $data
     * @return \App\Models\Bookmark
     */
    public function store(array $data): Bookmark
    {
         return $this->start()->create($data);
    }

    /**
     * Get bookmarks list.
     *
     * @param array $sortConfig
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getList(array $sortConfig = []): LengthAwarePaginator
    {
        $query = $this->start();
        if (!empty($sortConfig)) {
            $query = $query->orderBy($sortConfig['field'], $sortConfig['type']);
        } else {
            $query = $query->orderBy('created_at', 'desc');
        }
        return $query->paginate(3, [
            'id',
            'favicon_url',
            'url',
            'title',
            'created_at'
        ]);
    }

    /**
     * Get bookmark item by id.
     *
     * @param $bookmarkId
     * @return \App\Models\Bookmark
     */
    public function getItem($bookmarkId): Bookmark
    {
        return $this->start()->findOrFail($bookmarkId,[
            'favicon_url',
            'url',
            'title',
            'meta_description',
            'meta_keywords',
            'created_at'
        ]);
    }

    /**
     * Get collection for excel file.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getExcelList(): Collection
    {
        return $this->start()->orderBy('created_at', 'desc')
            ->get([
                'id',
                'favicon_url',
                'url',
                'title',
                'meta_description',
                'meta_keywords',
                'created_at'
            ]);
    }

    /**
     * Destroy bookmark by id.
     *
     * @param int $id
     * @return void
     */
    public function destroy(int $id): void
    {
        $this->model::destroy($id);
    }
}
