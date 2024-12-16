import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Delete({ openDelete, setDeleteState, selectedId }) {
    console.log('delete',selectedId)
        const { delete: destroy, processing } = useForm();
     const handleDelete =(id:number)=>{
        console.log(selectedId)
            destroy(`/companies/${id}`,{
                onSuccess: () => {
                    console.log("Company deleted successfully!");
                    setDeleteState()
                },
                onError: (errors) => {
                    console.error("Error deleting company:", errors);
                },
            })
        }
    return (
        <AlertDialog open={openDelete} onOpenChange={setDeleteState}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Dialog</AlertDialogTitle>
                    <AlertDialogDescription>
                        <p>Are you sure you want to delete this company?</p>
                        <div className=" flex items-center justify-end gap-5 mt-10">
                            <span className=" ">
                                <AlertDialogTrigger>Cancel</AlertDialogTrigger>
                            </span>
                            <span>
                                <Button onClick={()=>handleDelete(selectedId.id)}  className="bg-red-500 text-white flex items-center justify-center w-[100px]">Yes</Button>
                            </span>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
