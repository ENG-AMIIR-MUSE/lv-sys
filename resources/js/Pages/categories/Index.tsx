import React, { useState } from "react";
import { useForm, usePage, router } from "@inertiajs/react"; // Inertia useForm hook

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
import { EditCategory } from "./EditCategory";
import { DeleteCategory } from "./DeleteCategory";

interface Category {
    id: number;
    name: string;
}

interface CategoriesProps extends PageProps {
    categories: Category[];
}

function Categories({ categories }: CategoriesProps) {
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
    };

    const handleDelete = (category: Category) => {
        setDeletingCategory(category);
    };

    return (
        <div className="mx-[20px] flex flex-col h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                <Button onClick={() => router.visit('/categories/create')}>Add New Category</Button>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex-1 overflow-auto">
                    <Table>
                        <TableCaption>A list of all categories.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="whitespace-nowrap">Name</TableHead>
                                <TableHead className="whitespace-nowrap text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category) => (
                                <TableRow key={category.id}>
                                    <TableCell className="font-medium">{category.name}</TableCell>
                                    <TableCell className="text-right space-x-2 flex items-center">
                                        <Button
                                            onClick={() => handleEdit(category)}
                                            variant="outline"
                                            size="icon"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(category)}
                                            variant="outline"
                                            size="icon"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {editingCategory && (
                <EditCategory
                    category={editingCategory}
                    open={!!editingCategory}
                    onClose={() => setEditingCategory(null)}
                />
            )}
            {deletingCategory && (
                <DeleteCategory
                    category={deletingCategory}
                    open={!!deletingCategory}
                    onClose={() => setDeletingCategory(null)}
                />
            )}
        </div>
    );
}

Categories.layout = (page) => <Page children={page} />;

export default Categories;
