import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { PageProps } from '@/types';
import Page from '@/Components/page';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 function Jobs({auth}:PageProps) {
    console.log(window.location.pathname);

  return (
    <div className='mx-10'>
    <h1 className='font-bold text-xl mt-5'>Jobs</h1>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="w-[100px]">Logo</TableHead>
          <TableHead className="w-[100px]">Website</TableHead>
          <TableHead className="w-[100px]">Description </TableHead>
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
    </div>
  )
}

Jobs.layout = (page)=><Page children={page}/>

export default Jobs
