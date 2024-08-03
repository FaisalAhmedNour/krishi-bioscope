import Link from "next/link";
import { Separator } from "./ui/separator";

const SideBarOfAdmin = () => {
    return (
        <div className="py-2 border rounded-sm h-full">
            <Separator orientation="horizontal" />
            <Link href={'/admin/categories'}>
                <p className="px-10 text-center py-1 cursor-pointer hover:bg-slate-100">Categories</p>
            </Link>
            <Separator orientation="horizontal" />
            <Link href={'/admin/videos'}>
                <p className="px-10 text-center py-1 cursor-pointer hover:bg-slate-100">Videos</p>
            </Link>
            <Separator orientation="horizontal" />
        </div>
    )
}

export default SideBarOfAdmin;