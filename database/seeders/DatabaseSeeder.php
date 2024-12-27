<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Factories\Providers\JobCategoryProvider;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new JobCategoryProvider($faker));

        $users = \App\Models\User::factory(10)->create();
        $company = \App\Models\Company::factory(10)->recycle($users)->create();
        $jobs = \App\Models\Job::factory(10)->recycle($company)->create();
        $applications = \App\Models\applications::factory(10)
            ->recycle($jobs)
            ->recycle($users)
            ->create();

        $categories = \App\Models\Category::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
