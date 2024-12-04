import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/Components/ui/button";

import {
    AlertDialogFooter,
    AlertDialogHeader,
} from "@/Components/ui/alert-dialog";

import { useState } from "react";

export default function Dashboard({ auth }: PageProps) {
    const [open,setOpen] = useState(false)

    const close = ()=>{
        setOpen(false)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="font-semibold text-xl text-gray-800 leading-tight flex flex-col">
                    Dashboard

                    <span>Welcome Amir Mues Hassan</span>
                </div>
                
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 bg-red-500">
                            You're logged in!
                        </div>
                        <Button>Click ME</Button>
                  
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
