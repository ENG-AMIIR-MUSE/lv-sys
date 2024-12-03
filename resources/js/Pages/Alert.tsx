import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import {
    AlertDialogFooter,
    AlertDialogHeader,
} from "@/Components/ui/alert-dialog";
export default function Alert({open:any,onOpenChange:any}) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogTrigger asChild>
                {/* <Button variant="destructive" onClick={() => setOpen(true)}>
                    Open Alert
                </Button> */}
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(onOpenChange)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setOpen(onOpenChange)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
