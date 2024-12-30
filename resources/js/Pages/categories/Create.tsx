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

export function CreateCategory({ open, setOpen }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/categories", {
            onSuccess: () => {
                setData({ name: "" });
                setOpen(false);
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="max-w-[800px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Add New Category</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Category Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        placeholder="Enter category name"
                                        className="w-full"
                                    />
                                    {errors.name && (
                                        <div className="text-red-500 text-sm">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
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

export default CreateCategory;