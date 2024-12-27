import React from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Page from "@/Components/page";

function CreateCategory({ usePage }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name, e.target.value);
    };
    console.log("jjjj", usePage)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/categories", {
            onSuccess: () => {
                setData({ name: "" });
            },
        });
    };

    return (
        <div className="mx-[20px] flex flex-col h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Add  </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Category </Label>
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

CreateCategory.layout = (page) => <Page children={page} />;

export default CreateCategory;
