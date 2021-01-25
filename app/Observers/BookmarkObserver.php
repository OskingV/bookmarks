<?php

namespace App\Observers;

use App\Models\Bookmark;

class BookmarkObserver
{
    /**
     *
     * Set default favicon_path field before saving bookmark info to db.
     *
     * @param Bookmark $bookmark
     */
    public function creating(Bookmark $bookmark)
    {
        if ($bookmark->favicon_path === '') {
            $bookmark->favicon_path = '/favicon.ico';
        }
    }
}
