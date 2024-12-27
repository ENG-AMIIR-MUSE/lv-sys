import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react"; // Inertia useForm hook

import { FaEdit, FaTrash } from 'react-icons/fa'
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


import Page from "@/Components/page";
import { AddCompany } from "./Add";
import { EditCompany } from "./EditCompany";
import Delete from "./Delete";


function Companies() {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState(null)
    const [openDelete, setOpenDelete] = useState(false)


    const props = usePage();

    console.log("My Pros", props.props.success);

    // Use Inertia's useForm hook to manage form state
    const setStateModal = () => {
        setOpen(!open);
    };
    const setEditStaet = () => {
        setOpenEdit(!openEdit);
    };
    const setDeleteStaet = () => {

        setOpenDelete(!openDelete);
    };



    return (
        <div className="mx-10 ">
            <div className="flex justify-end items-center justify-between">
                <h1 className="font-bold text-xl ">Companies</h1>
                <Button onClick={setStateModal}>Add New Company</Button>
            </div>

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
                                    <img className="w-full rounded-full  " src={`${company.logo}`} alt="" />

                                </TableCell>

                                <TableCell>{company.company_name}</TableCell>
                                <TableCell>{company.website}</TableCell>
                                <TableCell>{company.phone}</TableCell>
                                <TableCell>{company.description.slice(0, 50)}</TableCell>
                                <TableCell>{company.address}</TableCell>
                                <TableCell>{company.city}</TableCell>
                                <TableCell>{company.state}</TableCell>
                                <TableCell>{company.country}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        <FaEdit className="text-blue-500" onClick={() => {
                                            setSelected(company)
                                            setEditStaet()
                                        }}>Edit</FaEdit>

                                        <FaTrash color="bg-red-500" className="text-red-500 " onClick={() => {
                                            setSelected(company)


                                            setDeleteStaet()
                                        }
                                        }>Delete</FaTrash>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <AddCompany open={open} setStateModal={setStateModal} />
            <EditCompany selectedCompany={selected} open={openEdit} setStateModal={setEditStaet} />
            <Delete openDelete={openDelete} setDeleteState={setDeleteStaet} selectedId={selected} />
        </div>
    );
}
Companies.layout = (page) => <Page children={page} />;
export default Companies;
