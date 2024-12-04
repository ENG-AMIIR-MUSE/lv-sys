<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key to users table
            $table->string('company_name', 100); // Company name
            $table->string('website', 255)->nullable(); // Company website
            $table->string('phone', 255)->nullable(); // Company website
            $table->text('description')->nullable(); // Description of the company
            $table->text('address')->nullable(); // Company address
            $table->string('city', 50)->nullable(); // City
            $table->string('state', 50)->nullable(); // State
            $table->string('country', 50)->nullable(); // Country
            $table->string('logo', 255)->nullable(); // Logo path
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
