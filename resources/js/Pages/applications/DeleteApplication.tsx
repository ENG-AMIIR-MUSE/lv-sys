import React from 'react'
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

interface Application {
    id: number;
    job_id: number;
    user_id: number;
    cover_letter: string;
    resume: string;
    applied_at: string;
    status: string;
}

interface DeleteApplicationProps {
    application: Application;
    open: boolean;
    onClose: () => void;
}

export function DeleteApplication({ application, open, onClose }: DeleteApplicationProps) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = () => {
        destroy(`/applications/${application.id}`, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent className="sm:max-w-[425px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Application</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete this application? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={processing}>
                        Delete
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
