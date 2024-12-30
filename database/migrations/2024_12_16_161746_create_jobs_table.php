<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id'); // Foreign Key to companies table
            $table->unsignedBigInteger('category_id'); // Foreign Key to companies table
            $table->string('title', 100);
            $table->text('description');
            $table->string('location', 100)->nullable();
            $table->enum('employment_type', ['full_time', 'part_time', 'contract', 'internship']);
            $table->enum('experience_level', ['entry', 'mid', 'senior']);
           // Foreign Key to categories table,
            $table->string('salary_range', 50)->nullable();
            $table->timestamp('posted_at')->useCurrent();
            $table->date('closing_date')->nullable();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
