<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'company_id' => Company::factory(), // Links to a Company
            'title' => $this->faker->jobTitle(),
            "category_id" => Category::factory(),
            'description' => $this->faker->paragraph(),
            'location' => $this->faker->city(),
            'employment_type' => $this->faker->randomElement(['full_time', 'part_time', 'contract', 'internship']),
            'experience_level' => $this->faker->randomElement(['entry', 'mid', 'senior']),
            'salary_range' => $this->faker->randomElement(['$30,000-$50,000', '$50,000-$70,000', '$70,000+']),
            'posted_at' => now(),
            'closing_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
