<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('jobs/Jobs');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */ public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'company_id' => 'required|exists:companies,company_id',
            'title' => 'required|string|max:100',
            'description' => 'required|string',
            'location' => 'nullable|string|max:100',
            'employment_type' => 'required|in:full_time,part_time,contract,internship',
            'experience_level' => 'required|in:entry,mid,senior',
            'salary_range' => 'nullable|string|max:50',
            'closing_date' => 'nullable|date|after:today',
        ]);

        // Create the job record
        Jobs::create([
            'company_id' => $request->input('company_id'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'location' => $request->input('location'),
            'employment_type' => $request->input('employment_type'),
            'experience_level' => $request->input('experience_level'),
            'salary_range' => $request->input('salary_range'),
            'closing_date' => $request->input('closing_date'),
        ]);

        // Redirect or return a response
        return redirect()->route('jobs.index')->with('success', 'Job created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Jobs $jobs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jobs $jobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jobs $jobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jobs $jobs)
    {
        //
    }
}
