<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameFaviconPathFieldToBookmarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bookmarks', function (Blueprint $table) {
            $table->renameColumn('favicon_path', 'favicon_url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bookmarks', function (Blueprint $table) {
            $table->renameColumn('favicon_url', 'favicon_path');
        });
    }
}
