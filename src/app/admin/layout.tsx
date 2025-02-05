"use client"

import { AppSidebar } from "@/components/material/admin/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { HmoDataProvider } from "../../../context/hmoContext";
import { useUser } from "@/lib/Auth";
import { redirect } from "next/navigation";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useUser();
  if(user === false) return <div className="w-screen h-screen bg-white flex flex-col space-y-4 items-center justify-center"><h1 className="text-lg font-semibold text-gray-500">loading</h1></div>
  if(!user) return redirect("/auth/sign-in")
  return (
    <HmoDataProvider>
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
    </HmoDataProvider>
  );
}
