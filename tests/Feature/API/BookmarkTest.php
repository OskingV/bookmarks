<?php

namespace Tests\Feature\API;

use App\Models\Bookmark;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookmarkTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * Test store bookmark method
     *
     * @return void
     *
     */
    public function testStore(): void
    {
        $storeBookmarkData = [
            'url' => 'https://www.google.com'
        ];
        $url = config('app.url') . '/api/bookmarks';
        $response = $this->json('POST', $url, $storeBookmarkData);
        $response->assertStatus(201);
        $storedBookmarkQuery = Bookmark::where([
            'url' => $storeBookmarkData['url']
        ]);
        $this->assertTrue($storedBookmarkQuery->exists());
        $storedBookmark = $storedBookmarkQuery->first();
        $response->assertJson([
            'data' => [
                'id' => $storedBookmark->id,
                'created_at' => $storedBookmark->created_at->format('H:i d.m.Y'),
                'favicon_url' => $storedBookmark->favicon_url,
                'url' => $storedBookmark->url,
                'title' => $storedBookmark->title,
                'meta_description' => $storedBookmark->meta_description,
                'meta_keywords' => $storedBookmark->meta_keywords
            ]
        ]);
    }

    /**
     * Test get bookmarks list method
     *
     * @return void
     *
     */
    public function testIndex(): void
    {
        $bookmarks = Bookmark::factory()->count($this->faker->numberBetween(0, 3))->create();
        $url = config('app.url') . '/api/bookmarks';
        $response = $this->json('GET', $url);
        $response->assertStatus(200);
        $array = [];
        foreach ($bookmarks as $bookmark) {
            $array[] = [
                'id' => $bookmark->id,
                'created_at' => $bookmark->created_at->format('H:i d.m.Y'),
                'favicon_url' => $bookmark->favicon_url,
                'url' => $bookmark->url,
                'title' => $bookmark->title
            ];
        }
        $response->assertJsonFragment([
            'data' => $array
        ]);
    }
}
