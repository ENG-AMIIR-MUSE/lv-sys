import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function Page({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {window.location.pathname == "/jobs" ? (
                                    <BreadcrumbItem className="hidden md:flex">
                                        <BreadcrumbLink href="#">
                                            Jobs
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="hidden md:block" />

                                        <BreadcrumbPage>
                                            Jobs
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                ) : window.location.pathname ==
                                  "/application" ? (
                                    <BreadcrumbItem className="hidden md:flex">
                                        <BreadcrumbLink href="#">
                                            Jobs
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="hidden md:block" />

                                        <BreadcrumbPage>
                                            Applications
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                ) : window.location.pathname ==  "/companies" ? (
                                    <BreadcrumbItem className="hidden md:flex">
                                        <BreadcrumbLink href="#">
                                            Jobs
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="hidden md:block" />

                                        <BreadcrumbPage>
                                            Companies
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                ) :null}
                                <BreadcrumbSeparator className="hidden md:block" />
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
       
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
