<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\appointment;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)->create()->each(function ($user) {
            Appointment::factory(2)->create([
                'user_id' => $user->id
            ]);
        });


        User::factory()->create([
            'firstName' => 'Test ',
            'lastName' => 'Admin',
            'email' => 'admin@example.com',
            'password' => '123456789',
            'role' => 'admin',
        ]);
    }
}
