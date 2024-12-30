<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id',
        'title',
        'category_id',
        'description',
        'location',
        'employment_type',
        'experience_level',
        'salary_range',
        'posted_at',
        'closing_date',
    ];
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function applications()
    {
        return $this->hasMany(applications::class);
    }
}
