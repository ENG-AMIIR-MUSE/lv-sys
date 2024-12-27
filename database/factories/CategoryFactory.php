<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\Providers\JobCategoryProvider;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Add the custom provider to Faker
        $this->faker->addProvider(new JobCategoryProvider($this->faker));

        return [
            'name' => $this->faker->jobCategory(),
        ];
    }
}
