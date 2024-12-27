"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

export function Add({ open, setStateModal }) {
    const { data, setData, post, processing, errors } = useForm({
        job_id: "",
        applicant_name: "",
        applicant_email: "",
        resume: "",
        status: "pending", // Default value
    });

    // Handle form field changes
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Post form data to the server using Inertia's post method
        post("/applications", {
            onSuccess: () => {
                // Reset the form fields on success
                setData({
                    job_id: "",
                    applicant_name: "",
                    applicant_email: "",
                    resume: "",
                    status: "pending",
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
            <AlertDialogContent className="max-w-[800px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Add New Application</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Job ID */}
                                <div>
                                    <Label>Job ID</Label>
                                    <Input
                                        type="number"
                                        name="job_id"
                                        value={data.job_id}
                                        onChange={handleChange}
                                        placeholder="Enter job ID"
                                        className="w-full"
                                    />
                                    {errors.job_id && (
                                        <div className="text-red-500 text-sm">
                                            {errors.job_id}
                                        </div>
                                    )}
                                </div>

                                {/* Applicant Name */}
                                <div>
                                    <Label>Applicant Name</Label>
                                    <Input
                                        type="text"
                                        name="applicant_name"
                                        value={data.applicant_name}
                                        onChange={handleChange}
                                        placeholder="Applicant name"
                                        className="w-full"
                                    />
                                    {errors.applicant_name && (
                                        <div className="text-red-500 text-sm">
                                            {errors.applicant_name}
                                        </div>
                                    )}
                                </div>

                                {/* Applicant Email */}
                                <div>
                                    <Label>Applicant Email</Label>
                                    <Input
                                        type="email"
                                        name="applicant_email"
                                        value={data.applicant_email}
                                        onChange={handleChange}
                                        placeholder="Applicant email"
                                        className="w-full"
                                    />
                                    {errors.applicant_email && (
                                        <div className="text-red-500 text-sm">
                                            {errors.applicant_email}
                                        </div>
                                    )}
                                </div>

                                {/* Resume */}
                                <div>
                                    <Label>Resume</Label>
                                    <Input
                                        type="text"
                                        name="resume"
                                        value={data.resume}
                                        onChange={handleChange}
                                        placeholder="Resume link"
                                        className="w-full"
                                    />
                                    {errors.resume && (
                                        <div className="text-red-500 text-sm">
                                            {errors.resume}
                                        </div>
                                    )}
                                </div>

                                {/* Status */}
                                <div>
                                    <Label>Status</Label>
                                    <Input
                                        type="text"
                                        name="status"
                                        value={data.status}
                                        onChange={handleChange}
                                        placeholder="Status"
                                        className="w-full"
                                    />
                                    {errors.status && (
                                        <div className="text-red-500 text-sm">
                                            {errors.status}
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
