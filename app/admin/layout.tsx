"use client"

import SideBarOfAdmin from "@/components/SideBarOfAdmin";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isChildRoute = pathname.startsWith('/admin/') && pathname !== '/admin';

    return (
        <>
            {isChildRoute ? (
                <div className="flex h-screen">
                    <SideBarOfAdmin />
                    <div className="flex-grow h-full">
                        {children}
                    </div>
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    )
}

export default AdminLayout;