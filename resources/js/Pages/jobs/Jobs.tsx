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
import { EditJob } from "./EditJob";
import { DeleteJob } from "./DeleteJob";
import { AddJob } from "./AddJob";

interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    employment_type: string;
    experience_level: string;
    salary_range: string;
    closing_date: string;
    company?: {
        company_name: string;
    };
}

interface JobsProps extends PageProps {
    jobs: {
        data: Job[];
        links: Array<{
            url?: string;
            label: string;
            active: boolean;
        }>;
    };
}

function Jobs({ auth, jobs }: JobsProps) {
    const [open, setOpen] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [deletingJob, setDeletingJob] = useState<Job | null>(null);

    const setStateModal = () => {
        setOpen(!open);
    };

    const handleEdit = (job: Job) => {
        setEditingJob(job);
    };

    const handleDelete = (job: Job) => {
        setDeletingJob(job);
    };

    return (
        <div className="mx-[20px] flex flex-col h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Jobs</h1>
                <Button onClick={setStateModal}>Add New Job</Button>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex-1 overflow-auto">
                    <Table>
                        <TableCaption>A list of all job postings.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Experience</TableHead>
                                <TableHead>Salary Range</TableHead>
                                <TableHead>Closing Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {jobs.data.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell className="font-medium">{job.title}</TableCell>
                                    <TableCell>{job.company?.company_name}</TableCell>
                                    <TableCell>{job.location}</TableCell>
                                    <TableCell>{job.employment_type}</TableCell>
                                    <TableCell>{job.experience_level}</TableCell>
                                    <TableCell>{job.salary_range}</TableCell>
                                    <TableCell>{job.closing_date}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button
                                            onClick={() => handleEdit(job)}
                                            variant="outline"
                                            size="icon"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(job)}
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
                        {jobs.links.map((link, index) => (
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

            <AddJob open={open} setStateModal={setStateModal} />
            {editingJob && (
                <EditJob
                    job={editingJob}
                    open={!!editingJob}
                    onClose={() => setEditingJob(null)}
                />
            )}
            {deletingJob && (
                <DeleteJob
                    job={deletingJob}
                    open={!!deletingJob}
                    onClose={() => setDeletingJob(null)}
                />
            )}
        </div>
    );
}

Jobs.layout = (page) => <Page children={page} />;

export default Jobs;