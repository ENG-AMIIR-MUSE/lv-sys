<?php

namespace App\Http\Controllers;

use App\Models\Companies;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompaniesController extends Controller
{
    // Display a listing of the companies.
    public function index()
    {


        $companies = Company::all(); // Retrieve all companies
        return Inertia::render('companies/Comapanies')->with('success', $companies);

        // return view('companies.index', compact('companies')); // Return companies to a view
    }

    // Show the form for creating a new company.
    public function create()
    {
        return view('companies.create'); // Show the create form view
    }

    // Store a newly created company in storage.
    public function store(Request $request)
    {



        // Validate the request data
        $request->validate([
            'company_name' => 'required|string|max:100',
            'website' => 'required|url',
            'phone' => 'required',
            'description' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'country' => 'required|string',
            'logo' => 'nullable|max:2048', // Add logo validation (if necessary)
        ]);

        // Create the company
        $company = new Company();
        $company->user_id = auth()->id(); // Assuming the user is authenticated
        $company->company_name = $request->company_name;
        $company->website = $request->website;
        $company->phone = $request->phone;
        $company->description = $request->description;
        $company->address = $request->address;
        $company->city = $request->city;
        $company->state = $request->state;
        $company->country = $request->country;

        // Handle the logo upload (if necessary)
        // if ($request->hasFile('logo')) {
        //     $company->logo = $request->file('logo')->store('logos', 'public');
        // }

        $company->save(); // Save the company in the database

        return redirect()->route('companies.index')->with('success', 'Company created successfully!');
    }

    // Display the specified company.
    public function show(Company $company)
    {
        return view('companies.show', compact('company'));
    }

    // Show the form for editing the specified company.
    public function edit(Company $company)
    {
        return view('companies.edit', compact('company'));
    }

    // Update the specified company in storage.
    public function update(Request $request, Company $company)
    {
        // Validate the request data
        $request->validate([
            'company_name' => 'required|string|max:100',
            'website' => 'nullable|url',
            'phone' => 'required',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'state' => 'nullable|string',
            'country' => 'nullable|string',
            'logo' => 'required|string',
        ]);

        // Update the company
        $company->company_name = $request->company_name;
        $company->website = $request->website;
        $company->description = $request->description;
        $company->address = $request->address;
        $company->city = $request->city;
        $company->state = $request->state;
        $company->country = $request->country;

        // Handle the logo upload (if necessary)
        if ($request->hasFile('logo')) {
            $company->logo = $request->file('logo')->store('logos', 'public');
        }

        $company->save(); // Save the updated company in the database

        return redirect()->route('companies.index')->with('success', 'Company updated successfully!');
    }

    // Remove the specified company from storage.
    public function destroy(Company $company)
    {
        $company->delete(); // Delete the company

        return redirect()->route('companies.index')->with('success', 'Company deleted successfully!');
    }
}
