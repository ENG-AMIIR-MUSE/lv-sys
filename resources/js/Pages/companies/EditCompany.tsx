import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

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
import { useEffect } from "react";
import { useForm } from "@inertiajs/react";

function submit() {}
export function EditCompany({ open, setStateModal, selectedCompany }) {
   
    const { data, setData, put, processing, errors } = useForm({
        id:null,
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
    useEffect(() => {
        if (selectedCompany) {
            setData({
                id:selectedCompany.id,
                company_name: selectedCompany.company_name || "",
                website: selectedCompany.website || "",
                phone: selectedCompany.phone || "",
                description: selectedCompany.description || "",
                state: selectedCompany.state || "",
                country: selectedCompany.country || "",
                city: selectedCompany.city || "",
                address: selectedCompany.address || "",
                logo: selectedCompany.logo || "",
            });
        }
    }, [selectedCompany]);
    // Toggle the dialog/modal

    // Handle form field changes
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        // Post form data to the server using Inertia's post method
        put(`/companies/${data.id}`, {
            onSuccess: () => {
                console.log('Success')
                // Reset the form fields on success
                setData({
                    id:null,
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
        <AlertDialog open={open} onOpenChange={setStateModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Update New Company</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <Label>Company Name</Label>
                                    <Input
                                        type="text"
                                        name="company_name"
                                        value={data?.company_name}
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
                                        value={data?.website}
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
                                        value={data?.phone}
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
                                        value={data?.description}
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
                                    <Button type="submit" disabled={processing}>
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
    );
}
function put(arg0: string, arg1: { onSuccess: () => void; onError: (errors: any) => void; }) {
    throw new Error("Function not implemented.");
}

