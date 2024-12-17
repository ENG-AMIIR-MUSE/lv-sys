import React from 'react'
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

interface Job {
    id: number;
    title: string;
}

interface DeleteJobProps {
    job: Job;
    open: boolean;
    onClose: () => void;
}

export function DeleteJob({ job, open, onClose }: DeleteJobProps) {
    const handleDelete = () => {
        router.delete(route('jobs.destroy', job.id), {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the job posting
                        "{job.title}" and remove its data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
