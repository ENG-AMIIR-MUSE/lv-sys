<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class applications extends Model
{
    use HasFactory;
    protected $fillable = [
        'job_id',
        'user_id',
        'cover_letter',
        'resume',
        'applied_at',
        'status',
    ];
    public function job()

    {
        return $this->belongsTo(Job::class);
    }

    // Define relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
