<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if ($this->command->confirm('Do you wish to refresh migration before seeding, it will clear all old data ?')) {

            $this->command->call('migrate:refresh');

            $this->command->warn("Data cleared, starting from blank database.");
        }

        $numberOfUser = (int) $this->command->ask('How many users you need ?', 20);

        $users = factory(\App\User::class, $numberOfUser)->create();

        $users->each(function($user) {
            // create profile for user
            factory(\App\Profile::class)->create(['user_id' => $user->id]);
        });

        $this->command->warn("All done!");
    }
}
