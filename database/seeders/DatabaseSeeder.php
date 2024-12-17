<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users  = \App\Models\User::factory(10)->create();
        $company  = \App\Models\Company::factory(10)->recycle($users)->create();
        $jobs  = \App\Models\Job::factory(10)->recycle($company)->create();



        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
