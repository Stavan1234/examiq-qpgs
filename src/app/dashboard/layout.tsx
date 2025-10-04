// src/app/dashboard/layout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { NavUser } from "@/components/nav-user";

// This component wraps all pages inside the /dashboard route
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- CHANGE 1: Define a temporary user object ---
  const user = {
    name: "Admin User",
    email: "examcell@fcrit.ac.in",
    avatar: "/avatars/admin.png", // Make sure you have a default avatar image here
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header Section */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            {/* You can make this dynamic later */}
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            {/* We can add a search bar or notifications here later */}
            
            {/* --- CHANGE 2: Pass the user object as a prop --- */}
            <NavUser user={user} />

          </div>
        </header>

        {/* Main Content Area where the page will be rendered */}
        <main className="flex-1 flex-col gap-4 bg-exam-light-gray p-4 pt-4 md:gap-8 md:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}