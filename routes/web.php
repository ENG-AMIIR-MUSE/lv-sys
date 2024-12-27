<?php

use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth:sanctum')->get('/j', function () {
    return Inertia::render('Jobs');
})->name('job.index');

Route::middleware('auth:sanctum')->get('/admin', function () {
    return Inertia::render('AdminDashboard');
})->name('admin.index');

Route::middleware('auth:sanctum')->get('/application', function () {
    return Inertia::render('application');
})->name('application.index');



Route::resource('/companies', CompaniesController::class)->withoutMiddleware(VerifyCsrfToken::class);
Route::resource('/jobs', JobsController::class)->withoutMiddleware(VerifyCsrfToken::class);
Route::resource('applications', ApplicationsController::class);
require __DIR__ . '/auth.php';
