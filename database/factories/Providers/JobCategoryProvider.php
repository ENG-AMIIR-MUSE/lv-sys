<?php

namespace Database\Factories\Providers;

use Faker\Provider\Base;

class JobCategoryProvider extends Base
{
    protected static $categories = [
        'Engineering',
        'Marketing',
        'Sales',
        'Human Resources',
        'Finance',
        'Customer Service',
        'IT',
        'Healthcare',
        'Education',
        'Construction',
        'Legal',
        'Operations',
        'Product Management',
        'Design',
        'Research and Development',
    ];

    public static function jobCategory()
    {
        return static::randomElement(static::$categories);
    }
}
