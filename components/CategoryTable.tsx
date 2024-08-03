"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit, Plus, Trash2 } from "lucide-react"
import CategoryAddForm from "./CategoryAddForm"
import { useEffect, useState } from "react"
import axios from "axios"

export function CategoryTable() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                console.log("categories : ", response)
                setCategories(response.data.data);
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchCategories()
    }, [])

    return (
        <Table className="border">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Sl No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="text-center w-[200px]">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map((category, index) => (
                    <TableRow key={index}>
                        <TableCell>{index < 9 && 0}{index + 1}</TableCell>
                        <TableCell className="font-medium">{category?.name}</TableCell>
                        <TableCell className="flex justify-center items-center gap-2">
                            <Edit className="h-5 w-5 text-blue-600" />
                            <Trash2 className="h-5 w-5 text-red-600" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}></TableCell>
                    <TableCell className="flex justify-center">
                        <CategoryAddForm />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
