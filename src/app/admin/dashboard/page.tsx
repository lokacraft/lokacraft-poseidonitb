import { AppSidebar } from "@/components/material/admin/app-sidebar"
import NavHeader from "@/components/material/admin/nav-header"

export default function Page() {
  return (
    <>
    <NavHeader title="Dashboard" />
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      Dashboard
    </div>
    </>
  )
}
