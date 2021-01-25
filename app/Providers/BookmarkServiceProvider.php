<?php

namespace App\Providers;

use App\Models\Bookmark;
use App\Observers\BookmarkObserver;
use App\Services\Site\Contracts\Parser;
use App\Services\Site\CrawlerParser;
use Illuminate\Support\ServiceProvider;

class BookmarkServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Parser::class, CrawlerParser::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
