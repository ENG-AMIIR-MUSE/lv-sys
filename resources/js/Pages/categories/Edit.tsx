import React from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Page from "@/Components/page";

interface EditCategoryProps {
    category: {
        id: number;
        name: string;
    };
}

function EditCategory({ category }: EditCategoryProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/categories/${category.id}`, {
            onSuccess: () => {
                // Handle success
            },
        });
    };

    return (
        <div className="mx-[20px] flex flex-col h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Edit Category</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Category Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                <div className="flex justify-end space-x-2">
                    <Button type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
}

EditCategory.layout = (page) => <Page children={page} />;

export default EditCategory;
