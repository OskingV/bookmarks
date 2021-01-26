<?php

namespace Database\Factories;

use App\Models\Bookmark;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookmarkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bookmark::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'favicon_url' => $this->faker->imageUrl(16, 16),
            'url' => $this->faker->unique()->url,
            'title' => $this->faker->company,
            'meta_description' => $this->faker->sentence,
            'meta_keywords' => $this->faker->sentence
        ];
    }
}
