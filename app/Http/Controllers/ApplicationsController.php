<?php

namespace App\Http\Controllers;

use App\Models\applications;
use App\Http\Requests\StoreapplicationsRequest;
use App\Http\Requests\UpdateapplicationsRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ApplicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applications = applications::with(['user', 'job'])->paginate(10);

        // return $applications;
        return Inertia::render('applications/Applications', [
            'applications' => $applications, // Pass paginated data to the frontend
        ]);
        return Inertia::render('applications/Applications');
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
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'cover_letter' => 'nullable|string',
            'resume' => 'nullable|string|max:255',
            'status' => 'required|in:pending,reviewed,accepted,rejected',
        ]);

        // Add the authenticated user's ID to the validated data
        $validatedData['user_id'] = Auth::id();

        // Create a new application
        applications::create($validatedData);

        // Redirect or return a response
        return redirect()->route('applications.index')->with('success', 'Application submitted successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(applications $application)
    {
        return $application;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(applications $applications)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, applications $application)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'cover_letter' => 'nullable|string',
            'resume' => 'nullable|string|max:255',
            'status' => 'required|in:pending,reviewed,accepted,rejected',
        ]);

        // Update the application record
        $application->update($validatedData);

        // Redirect or return a response
        return redirect()->route('applications.index')->with('success', 'Application updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(applications $application)
    {
        // Delete the application record
        $application->delete();

        // Redirect or return a response
        return redirect()->route('applications.index')->with('success', 'Application deleted successfully.');
    }
}
