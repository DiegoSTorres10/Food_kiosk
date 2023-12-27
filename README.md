# Food Kiosk
## Overview
Food Kiosk is a web application developed with Laravel for the backend and React for the frontend. The Laravel backend includes migrations, APIResource for web API, authentication with Sanctum, and Seeder for product data. The React frontend utilizes Axios for RESTful API calls, Context API, React Modal for modals, Toast for notifications, and useSWR for server-state management.

## Installation and Setup
### Laravel Backend
#### Clone the Repository:

    git clone https://github.com/DiegoSTorres10/Food_kiosk.git
    cd Food_kiosk
#### Configure the Environment:
Copy the .env.example file to .env and configure the necessary settings, including the database connection.

    cp .env.example .env
#### Install Dependencies:

    composer install

#### Run Migrations and Seeders:

    php artisan migrate --seed

#### Run Laravel Server:

    php artisan serve


### React Frontend
#### Create Environment File:

Create a file named .env.local in the root of the frontend directory.
Add the backend API URL to the **.env.local** file:

    VITE_API_URL=http://localhost:8000
Install Dependencies:

    npm install

#### Run React Application:

    npm run dev

## Features
#### Authentication:

User authentication using Laravel Sanctum.
#### Admin and Customer Panel:

Admin panel for managing products and users.
Customer panel for placing orders.
#### Limited Users:

System restricts the number of users to three.
#### Tailwind CSS:
Utilizes Tailwind CSS for styling.
#### MySQL Database:
Uses MySQL as the backend database.

## #### Instructions for use
#### Administrative panel:
email: Admin@gmail.com
password: Administrator1@

#### Client1
email: Client1@gmail.com
password: Client1@

#### Client2
email: Client2@gmail.com
password: Client2@

## Demo:
click here