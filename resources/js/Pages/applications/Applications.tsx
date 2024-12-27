import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import Page from "@/Components/page";
import { useForm, usePage, router } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Pencil, Trash } from "lucide-react";
import { Add } from "./Add";
import { DeleteApplication } from "./DeleteApplication";
import { EditApplication } from "./EditApplication";
// import { EditApplication } from "./EditApplication";
// import { DeleteApplication } from "./DeleteApplication";

interface Application {
    id: number;
    job_id: number;
    user_id: number;
    cover_letter: string;
    resume: string;
    applied_at: string;
    status: string;
    user: {
        id: number;
        name: string;
        email: string;
        email_verified_at: string;
        created_at: string;
        updated_at: string;
    };
}

interface ApplicationsProps extends PageProps {
    applications: {
        data: Application[];
        links: Array<{
            url?: string;
            label: string;
            active: boolean;
        }>;
    };
}

function Applications({ auth, applications }: ApplicationsProps) {
    const [open, setOpen] = useState(false);
    const [editingApplication, setEditingApplication] = useState<Application | null>(null);
    const [deletingApplication, setDeletingApplication] = useState<Application | null>(null);

    const setStateModal = () => {
        setOpen(!open);
    };

    const handleEdit = (application: Application) => {
        setEditingApplication(application);
    };

    const handleDelete = (application: Application) => {
        console.log('Clicked')
        setDeletingApplication(application);
    };

    return (
        <div className="mx-[20px] flex flex-col h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Applications</h1>
                <Button onClick={setStateModal}>Add New Application</Button>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex-1 overflow-auto">
                    <Table>
                        <TableCaption>A list of all job applications.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="whitespace-nowrap">Applicant Name</TableHead>
                                <TableHead className="whitespace-nowrap">Applicant Email</TableHead>
                                <TableHead className="whitespace-nowrap">Job ID</TableHead>
                                <TableHead className="whitespace-nowrap">Status</TableHead>
                                <TableHead className="whitespace-nowrap">Cover Letter</TableHead>
                                <TableHead className="whitespace-nowrap">Resume</TableHead>
                                <TableHead className="whitespace-nowrap">Applied At</TableHead>
                                <TableHead className="whitespace-nowrap text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.data.map((application) => (
                                <TableRow key={application.id}>
                                    <TableCell className="font-medium">{application.user.name}</TableCell>
                                    <TableCell>{application.user.email}</TableCell>
                                    <TableCell>{application.job_id}</TableCell>
                                    <TableCell>{application.status}</TableCell>
                                    <TableCell>{application.cover_letter.slice(0, 50)}...</TableCell>
                                    <TableCell>
                                        <a href={application.resume} target="_blank" rel="noopener noreferrer">
                                            View Resume
                                        </a>
                                    </TableCell>
                                    <TableCell>{application.applied_at}</TableCell>
                                    <TableCell className="text-right space-x-2 flex items-center">
                                        <Button
                                            onClick={() => handleEdit(application)}
                                            variant="outline"
                                            size="icon"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(application)}
                                            variant="outline"
                                            size="icon"
                                        >
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="py-4 border-t">
                    <div className="flex justify-end space-x-2">
                        {applications.links.map((link, index) => (
                            <Button
                                key={index}
                                variant={link.active ? "default" : "outline"}
                                disabled={!link.url}
                                onClick={() => link.url && router.visit(link.url)}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Add open={open} setStateModal={setStateModal} />
            {editingApplication && (
                <EditApplication
                    application={editingApplication}
                    open={!!editingApplication}
                    onClose={() => setEditingApplication(null)}
                />
            )}
            {deletingApplication && (
                <DeleteApplication
                    application={deletingApplication}
                    open={!!deletingApplication}
                    onClose={() => setDeletingApplication(null)}
                />
            )}
        </div>
    );
}

Applications.layout = (page) => <Page children={page} />;

export default Applications;
