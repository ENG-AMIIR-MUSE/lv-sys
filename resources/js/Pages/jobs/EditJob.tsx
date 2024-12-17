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
} from "@/Components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

interface Job {
    id: number;
    company_id: string;
    title: string;
    description: string;
    location: string;
    employment_type: string;
    experience_level: string;
    salary_range: string;
    closing_date: string;
}

interface EditJobProps {
    job: Job;
    open: boolean;
    onClose: () => void;
}

export function EditJob({ job, open, onClose }: EditJobProps) {
    const { data, setData, put, processing, errors } = useForm({
        company_id: job.company_id,
        title: job.title,
        employment_type: job.employment_type,
        experience_level: job.experience_level,
        location: job.location,
        salary_range: job.salary_range,
        closing_date: job.closing_date,
        description: job.description,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('jobs.update', job.id), {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent className="sm:max-w-[425px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Job</AlertDialogTitle>
                    <AlertDialogDescription>
                        Make changes to the job posting here. Click save when you're done.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <p className="text-sm text-red-500">{errors.title}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="employment_type">Employment Type</Label>
                        <Select
                            name="employment_type"
                            value={data.employment_type}
                            onValueChange={(value) => setData('employment_type', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="full_time">Full Time</SelectItem>
                                <SelectItem value="part_time">Part Time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                                <SelectItem value="internship">Internship</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.employment_type && (
                            <p className="text-sm text-red-500">{errors.employment_type}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="experience_level">Experience Level</Label>
                        <Select
                            name="experience_level"
                            value={data.experience_level}
                            onValueChange={(value) => setData('experience_level', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="entry">Entry Level</SelectItem>
                                <SelectItem value="mid">Mid Level</SelectItem>
                                <SelectItem value="senior">Senior Level</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.experience_level && (
                            <p className="text-sm text-red-500">{errors.experience_level}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={data.location}
                            onChange={handleChange}
                        />
                        {errors.location && (
                            <p className="text-sm text-red-500">{errors.location}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="salary_range">Salary Range</Label>
                        <Input
                            id="salary_range"
                            name="salary_range"
                            value={data.salary_range}
                            onChange={handleChange}
                        />
                        {errors.salary_range && (
                            <p className="text-sm text-red-500">{errors.salary_range}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="closing_date">Closing Date</Label>
                        <Input
                            id="closing_date"
                            name="closing_date"
                            type="date"
                            value={data.closing_date}
                            onChange={handleChange}
                        />
                        {errors.closing_date && (
                            <p className="text-sm text-red-500">{errors.closing_date}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description}</p>
                        )}
                    </div>

                    <AlertDialogFooter>
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            Save Changes
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
