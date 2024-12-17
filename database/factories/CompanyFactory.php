<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Creates a user if not provided
            'company_name' => $this->faker->company(),
            'website' => $this->faker->url(),
            'phone' => $this->faker->phoneNumber(),
            'description' => $this->faker->paragraph(),
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'state' => $this->faker->state(),
            'country' => $this->faker->word(),
            'logo' => $this->faker->imageUrl(200, 200, 'business'), // Fake logo URL
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
