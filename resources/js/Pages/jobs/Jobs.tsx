import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import Page from "@/Components/page";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AddJob } from "./Add";
function Jobs({ auth }: PageProps) {
    
   const [open,setOpen] = useState(false)
 const setStateModal = ()=>{
  setOpen(!open)
 }
    return (
        <div className="mx-10">
            <h1 className="font-bold text-xl mt-5">Jobs</h1>
            <div className="flex justify-end items-center justify-between">
                <h1 className="font-bold text-xl ">Companies</h1>
                <Button onClick={setStateModal}>Add New Company</Button>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead className="w-[100px]">Logo</TableHead>
                        <TableHead className="w-[100px]">Website</TableHead>
                        <TableHead className="w-[100px]">
                            Description{" "}
                        </TableHead>
                        <TableHead className="w-[100px]">Address</TableHead>
                        <TableHead className="w-[100px]">City</TableHead>
                        <TableHead className="w-[100px]">State</TableHead>
                        <TableHead className="w-[100px]">Country</TableHead>
                        <TableHead className="w-[100px]">Created_At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <AddJob open={open} setStateModal={setStateModal}/>
        </div>
    );
}

Jobs.layout = (page) => <Page children={page} />;

export default Jobs;
