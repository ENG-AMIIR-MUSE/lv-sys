import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react"; // Inertia useForm hook
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
} from "@/components/ui/alert-dialog";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Page from "@/Components/page";

function Companies() {
    const [open, setOpen] = useState(false);

    const props = usePage();

    console.log("My Pros", props.props.success);

    // Use Inertia's useForm hook to manage form state
    const { data, setData, post, processing, errors } = useForm({
        company_name: "",
        website: "",
        phone: "",
        description: "",
        state: "",
        country: "",
        city: "",
        address: "",
        logo: "",
    });

    // Toggle the dialog/modal
    const setStateModal = () => {
        setOpen(!open);
    };

    // Handle form field changes
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Post form data to the server using Inertia's post method
        post("/companies", {
            onSuccess: () => {
                // Reset the form fields on success
                setData({
                    company_name: "",
                    website: "",
                    phone: "",
                    description: "",
                    state: "",
                    country: "",
                    city: "",
                    address: "",
                    logo: "",
                });
                setStateModal(); // Close modal on success
            },
            onError: (errors) => {
                // Handle any errors (e.g., validation errors)
                console.log(errors);
            },
        });
    };

    return (
        <div className="mx-10">
            <div className="flex justify-end items-center justify-between">
                <h1 className="font-bold text-xl ">Companies</h1>
                <Button onClick={setStateModal}>Add New Company</Button>
            </div>
            <AlertDialog open={open} onOpenChange={setStateModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Add New Company</AlertDialogTitle>
                        <AlertDialogDescription>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <Label>Company Name</Label>
                                        <Input
                                            type="text"
                                            name="company_name"
                                            value={data.company_name}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="w-full"
                                        />
                                        {errors.company_name && (
                                            <div className="text-red-500 text-sm">
                                                {errors.company_name}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Website</Label>
                                        <Input
                                            type="text"
                                            name="website"
                                            value={data.website}
                                            onChange={handleChange}
                                            placeholder="Website"
                                            className="w-full"
                                        />
                                        {errors.website && (
                                            <div className="text-red-500 text-sm">
                                                {errors.website}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <Label>Phone</Label>
                                        <Input
                                            type="number"
                                            name="phone"
                                            value={data.phone}
                                            onChange={handleChange}
                                            placeholder="Website"
                                            className="w-full"
                                        />
                                        {errors.website && (
                                            <div className="text-red-500 text-sm">
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Description</Label>
                                        <Input
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            onChange={handleChange}
                                            placeholder="Description"
                                            className="w-full"
                                        />
                                        {errors.description && (
                                            <div className="text-red-500 text-sm">
                                                {errors.description}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <Label>State</Label>
                                            <Input
                                                type="text"
                                                name="state"
                                                value={data.state}
                                                onChange={handleChange}
                                                placeholder="State"
                                                className="w-full"
                                            />
                                            {errors.state && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.state}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <Label>City</Label>
                                            <Input
                                                type="text"
                                                name="city"
                                                value={data.city}
                                                onChange={handleChange}
                                                placeholder="State"
                                                className="w-full"
                                            />
                                            {errors.state && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.city}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <Label>Country</Label>
                                            <Input
                                                type="text"
                                                name="country"
                                                value={data.country}
                                                onChange={handleChange}
                                                placeholder="Country"
                                                className="w-full"
                                            />
                                            {errors.country && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.country}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <Label>Address</Label>
                                        <Input
                                            type="text"
                                            name="address"
                                            value={data.address}
                                            onChange={handleChange}
                                            placeholder="Address"
                                            className="w-full"
                                        />
                                        {errors.address && (
                                            <div className="text-red-500 text-sm">
                                                {errors.address}
                                            </div>
                                        )}
                                    </div>

                                    {/* Logo field (just text for now) */}
                                    <div>
                                        <Label>Logo (Optional)</Label>
                                        <Input
                                            type="text"
                                            name="logo"
                                            value={data.logo}
                                            onChange={handleChange}
                                            placeholder="Logo (text)"
                                            className="w-full"
                                        />
                                        {errors.logo && (
                                            <div className="text-red-500 text-sm">
                                                {errors.logo}
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
                                            {processing
                                                ? "Submitting..."
                                                : "Submit"}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
            <div className="mx-10">
                <h1 className="font-bold text-xl mt-5 mb-5">Companies</h1>
                <Table>
                    <TableCaption>A list of your companies.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Logo</TableHead>
                            <TableHead className=""> Name</TableHead>
                            <TableHead className=""> Website</TableHead>
                            <TableHead className=""> Phone</TableHead>
                            <TableHead className=""> Description</TableHead>
                            <TableHead className=""> Address</TableHead>
                            <TableHead className=""> City</TableHead>
                            <TableHead>State</TableHead>

                            <TableHead>Country</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.props.success.map((company) => (
                            <TableRow key={company.id}>
                                <TableCell className="font-medium">
                                    {company.logo}
                                </TableCell>

                                <TableCell>{company.company_name}</TableCell>
                                <TableCell>{company.website}</TableCell>
                                <TableCell>{company.phone}</TableCell>
                                <TableCell>{company.description}</TableCell>
                                <TableCell>{company.address}</TableCell>
                                <TableCell>{company.city}</TableCell>
                                <TableCell>{company.state}</TableCell>
                                <TableCell>{company.country}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        <Button>Edit</Button>

                                        <Button>Delete</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
Companies.layout = (page) => <Page children={page} />;
export default Companies;
