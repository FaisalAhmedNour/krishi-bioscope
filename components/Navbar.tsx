import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar"
import logo from '@/public/logo.jpg'

import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"
import { CategorySearch } from "./CategorySearch"
import getAllCategories from "@/lib/getAllCategories"
import Link from "next/link"


export const Navbar = async () => {
    const categories = await getAllCategories();
    // console.log("categories", categories)

    return (
        <Menubar className="flex justify-between border-none px-5 my-2">
            <MenubarMenu>
                <Link href={'/'} >
                    <Image src={logo} alt="Krishi Bioscope" className="h-12 w-12" />
                </Link>
            </MenubarMenu>
            <div className="flex gap-4">
                {/* <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col py-3 divide-y divide-dashed">
                                    <li className="w-full text-center px-2 py-1 hover:bg-[#F8FAFC]">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-2 py-1 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <p className="min-w-24 text-sm leading-tight text-muted-foreground">Bealasflgueufawutifully</p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    
                                    <li className="w-full text-center px-2 py-1 hover:bg-[#F8FAFC]">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-2 py-1 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <p className="min-w-24 text-sm leading-tight text-muted-foreground">Beautifully</p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className="w-full text-center px-2 py-1 hover:bg-[#F8FAFC]">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-2 py-1 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <p className="min-w-24 text-sm leading-tight text-muted-foreground">Beautifully</p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className="w-full text-center px-2 py-1 hover:bg-[#F8FAFC]">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-2 py-1 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <p className="min-w-24 text-sm leading-tight text-muted-foreground">Beautifully</p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}
                <CategorySearch categories={categories?.data} />
                <MenubarMenu>
                    {/* <ThemeToggle /> */}
                </MenubarMenu>
            </div>
        </Menubar>
    )
}