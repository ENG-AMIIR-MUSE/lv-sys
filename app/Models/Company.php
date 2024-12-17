<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'company_name',
        'website',
        'phone',
        'description',
        'address',
        'city',
        'state',
        'country',
        'logo',
    ];

    public function job()
    {
        return $this->hasMany(Job::class);
    }
}
