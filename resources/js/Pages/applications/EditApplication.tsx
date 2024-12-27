import React from 'react'
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
} from "@/Components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

interface Application {
    id: number;
    job_id: number;
    user_id: number;
    cover_letter: string;
    resume: string;
    applied_at: string;
    status: string;
}

interface EditApplicationProps {
    application: Application;
    open: boolean;
    onClose: () => void;
}

export function EditApplication({ application, open, onClose }: EditApplicationProps) {
    const { data, setData, put, processing, errors } = useForm({
        job_id: application.job_id,
        cover_letter: application.cover_letter,
        resume: application.resume,
        status: application.status,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/applications/${application.id}`, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent className="sm:max-w-[800px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Application</AlertDialogTitle>
                    <AlertDialogDescription>
                        Make changes to the application here. Click save when you're done.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="job_id">Job ID</Label>
                        <Input
                            id="job_id"
                            name="job_id"
                            value={data.job_id}
                            onChange={handleChange}
                        />
                        {errors.job_id && (
                            <p className="text-sm text-red-500">{errors.job_id}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cover_letter">Cover Letter</Label>
                        <Input
                            id="cover_letter"
                            name="cover_letter"
                            value={data.cover_letter}
                            onChange={handleChange}
                        />
                        {errors.cover_letter && (
                            <p className="text-sm text-red-500">{errors.cover_letter}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resume">Resume</Label>
                        <Input
                            id="resume"
                            name="resume"
                            value={data.resume}
                            onChange={handleChange}
                        />
                        {errors.resume && (
                            <p className="text-sm text-red-500">{errors.resume}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Input
                            id="status"
                            name="status"
                            value={data.status}
                            onChange={handleChange}
                        />
                        {errors.status && (
                            <p className="text-sm text-red-500">{errors.status}</p>
                        )}
                    </div>

                    <AlertDialogFooter>
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            Save Changes
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
