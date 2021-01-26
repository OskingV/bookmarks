<?php

namespace App\Providers;

use App\Services\Bookmark\Contracts\Parser;
use App\Services\Bookmark\CrawlerParser;
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
