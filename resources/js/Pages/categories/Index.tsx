import React, { useState } from 'react';
import Page from '@/Components/page';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreateCategory from './Create';
import { useForm, usePage, router } from "@inertiajs/react";

function Categories({ categories }) {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  // Get current categories
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.data.slice(indexOfFirstCategory, indexOfLastCategory);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setStateModal = () => {
    setOpen(!open);
  };

  return (
    <div className='mx-[20px] flex flex-col h-[calc(100vh-100px)]'>
      <div className="flex justify-between items-center mb-4">
        <h1 className='font-bold text-xl mt-5'>Categories</h1>
        <Button onClick={setStateModal}>Add New Category</Button>
      </div>
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-auto">
          <Table>
            <TableCaption>A list of all categories.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell className="text-right space-x-2 flex items-center justify-end">
                    <Button variant="outline" size="sm" onClick={() => alert('Edit functionality not implemented yet')}>Edit</Button>
                    <Button variant="outline" size="sm" onClick={() => alert('Delete functionality not implemented yet')}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="py-4 border-t">
          <div className="flex justify-end space-x-2">
            {categories.links.map((link, index) => (
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
      <CreateCategory open={open} setOpen={setOpen} />
    </div>
  );
}

Categories.layout = (page) => <Page children={page} />;

export default Categories;