<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $NewUser = new User();
        $NewUser->name = 'Admin';
        $NewUser->email = 'Admin@gmail.com';
        $NewUser->password = bcrypt('Administrador1@');
        $NewUser->admin = 1;
        $NewUser->save();

        $NewUser = new User();
        $NewUser->name = 'Cliente1';
        $NewUser->email = 'Cliente1@gmail.com';
        $NewUser->password = bcrypt('Cliente1@');
        $NewUser->save();

        $NewUser = new User();
        $NewUser->name = 'Cliente2';
        $NewUser->email = 'Cliente2@gmail.com';
        $NewUser->password = bcrypt('Cliente2@');
        $NewUser->save();
    }
}
