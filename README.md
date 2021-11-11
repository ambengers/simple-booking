# Booking App

## System Requirements

-   PHP at least 7.3
-   Nginx
-   NodeJS
-   MySql
-   Composer

## Setup

-   Clone the repository
-   Run `cd to/the/app/directory`
-   Run `composer install`
-   Run `php artisan migrate`
-   Run `npm install`
-   Run `npm run dev`
-   Run `php artisan serve`
-   Browse to localhost:8000

## Seeders

-   Run `php artisan db:seed`
    This will seed the database with default user `john.doe@example.com` and password `password`

## Running Tests

-   Within the app directory run `./vendor/bin/phpunit`
