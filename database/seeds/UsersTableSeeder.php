<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Sir Adolf Hitler',
            'email' => 'satan.corpse17@gmail.com',
            'password' => Hash::make('13@7950r081'),
            'role' => 1,
        ]);

        DB::table('users')->insert([
            'name' => 'Srizan Chowdhury',
            'email' => 'nagib@cookupsapp.com',
            'password' => Hash::make('cookups123'),
            'role' => 2,
        ]);
    }
}
