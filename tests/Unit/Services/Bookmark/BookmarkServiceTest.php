<?php

namespace Tests\Unit\Services\Bookmark;

use App\Helpers\Arr;
use App\Http\Requests\API\Bookmark\StoreRequest;
use App\Services\Bookmark\BookmarkService;
use App\Services\Bookmark\Contracts\Parser;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Mockery;
use Mockery\MockInterface;

class BookmarkServiceTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * Test store bookmark method.
     *
     * @return void
     */
    public function testStore(): void
    {
        $service = app(BookmarkService::class);
        $url = $this->faker->url;
        $bookmarkData = [
            'favicon' => $this->faker->url,
            'title' => $this->faker->title,
            'meta_description' => $this->faker->sentence,
            'meta_keywords' => $this->faker->sentence
        ];
        $this->instance(
            Parser::class,
            Mockery::mock(Parser::class, function (MockInterface $mock) use ($url, $bookmarkData) {
                $mock->shouldReceive('parse')->with($url)->andReturn($bookmarkData)->once();
            })
        );
        $storeRequestMock = $this->mock(StoreRequest::class);
        $storeRequestMock->url = $url;
        $this->instance(StoreRequest::class, $storeRequestMock);
        $bookmark = app()->call([$service, 'store']);
        $bookmarkData['url'] = $url;
        Arr::renameKey($bookmarkData, 'favicon', 'favicon_url');
        foreach ($bookmarkData as $key => $item) {
            $this->assertTrue($bookmark->$key === $item);
        }
    }
}
