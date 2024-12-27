<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\applications;
use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationsFactory extends Factory
{
    protected $model = applications::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'job_id' => Job::factory(), // Link to an existing or new job
            'user_id' =>  User::factory(), // Link to an existing or new user
            'cover_letter' => $this->faker->paragraph(),
            'resume' => $this->faker->filePath(), // Simulate a resume file
            'status' => $this->faker->randomElement(['pending', 'accepted', 'rejected']),
        ];
    }
}
