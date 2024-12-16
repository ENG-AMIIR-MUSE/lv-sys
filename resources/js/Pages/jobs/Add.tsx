"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from "@/components/ui/label";
  
export function AddJob({ open, setStateModal }) {
    const { data, setData, post, processing, errors } = useForm({
        company_id: "",
        title: "",
        employment_type: "full_time", // Default value
        experience_level: "entry", // Default value
        location: "",
        salary_range: "",
        closing_date: "",
        description: "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Post form data to the server using Inertia's post method
        post("/jobs", {
            onSuccess: () => {
                // Reset the form fields on success
                setData({
                    company_id: "",
                    title: "",
                    employment_type: "full_time",
                    experience_level: "entry",
                    location: "",
                    salary_range: "",
                    closing_date: "",
                    description: "",
                });
                setStateModal(false); // Close modal on success
            },
            onError: (errors) => {
                console.log(errors); // Handle validation errors
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={setStateModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add New Job</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Company ID */}
                                <div>
                                    <Label>Company ID</Label>
                                    <Input
                                        type="number"
                                        name="company_id"
                                        value={data.company_id}
                                        onChange={handleChange}
                                        placeholder="Enter company ID"
                                        className="w-full"
                                    />
                                    {errors.company_id && (
                                        <div className="text-red-500 text-sm">
                                            {errors.company_id}
                                        </div>
                                    )}
                                </div>

                                {/* Title */}
                                <div>
                                    <Label>Job Title</Label>
                                    <Input
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        onChange={handleChange}
                                        placeholder="Job title"
                                        className="w-full"
                                    />
                                    {errors.title && (
                                        <div className="text-red-500 text-sm">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>

                                {/* Employment Type */}
                                <div>
                                    <Label>Employment Type</Label>
                                   <div className="w-full">
                                   <Select >
                                        <SelectTrigger className=" w-full">
                                            <SelectValue placeholder="eg.Full-Time Job" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Full-Time">
                                                Full-Time
                                            </SelectItem>
                                            <SelectItem value="Part-Time">
                                                Part-Time
                                            </SelectItem>
                                            <SelectItem value="Contract">
                                                Contract
                                            </SelectItem>
                                            <SelectItem value="Intership">
                                                Intership
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                   </div>
                                  
                                    {errors.employment_type && (
                                        <div className="text-red-500 text-sm">
                                            {errors.employment_type}
                                        </div>
                                    )}
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <Label>Experience Level</Label>
                                    <Select>
                                        <SelectTrigger  className=" w-full">
                                            <SelectValue placeholder="eg.Entery Job" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Entry">
                                                Entery
                                            </SelectItem>
                                            <SelectItem value="Mid">
                                                Mid
                                            </SelectItem>
                                            <SelectItem value="Senior">
                                                Senior
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.experience_level && (
                                        <div className="text-red-500 text-sm">
                                            {errors.experience_level}
                                        </div>
                                    )}
                                </div>

                                {/* Location */}
                                <div>
                                    <Label>Location</Label>
                                    <Input
                                        type="text"
                                        name="location"
                                        value={data.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                        className="w-full"
                                    />
                                    {errors.location && (
                                        <div className="text-red-500 text-sm">
                                            {errors.location}
                                        </div>
                                    )}
                                </div>

                                {/* Salary Range */}
                                <div>
                                    <Label>Salary Range</Label>
                                    <Input
                                        type="text"
                                        name="salary_range"
                                        value={data.salary_range}
                                        onChange={handleChange}
                                        placeholder="e.g., $3000 - $5000"
                                        className="w-full"
                                    />
                                    {errors.salary_range && (
                                        <div className="text-red-500 text-sm">
                                            {errors.salary_range}
                                        </div>
                                    )}
                                </div>

                                {/* Closing Date */}
                                <div>
                                    <Label>Closing Date</Label>
                                    <Input
                                        type="date"
                                        name="closing_date"
                                        value={data.closing_date}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                    {errors.closing_date && (
                                        <div className="text-red-500 text-sm">
                                            {errors.closing_date}
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <Label>Job Description</Label>
                                    <textarea
                                        name="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        placeholder="Job description"
                                        className="w-full h-[100px] border rounded px-3 py-2"
                                    />
                                    {errors.description && (
                                        <div className="text-red-500 text-sm">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="mt-4 flex justify-end gap-5">
                                    <AlertDialogTrigger>
                                        Cancel
                                    </AlertDialogTrigger>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                    >
                                        {processing ? "Submitting..." : "Submit"}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
