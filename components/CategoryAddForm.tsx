"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { array, date, object, string, z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import React, { useState } from "react"
import { Checkbox } from "./ui/checkbox"
import axios from "axios"

const FormSchema = object({
    name: string().nonempty({ message: "Category name is required" })
})

export default function CategoryAddForm() {
    const { toast } = useToast()
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: ''
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // console.log(data)
        try {
            const response = await axios.post('/api/categories', data);
            // console.log("categories : ", response)
            // setCategories(response.data.data);
            setIsOpen(false); 
            form.reset()
        }
        catch (error) {
            console.error(error)
        }
        toast({
            title: "Your message has been sent.",
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-600" size={'sm'} onClick={() => setIsOpen(true)}>
                    <Plus className="h-5 w-5" /> Add Category
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Add Category</DialogTitle>
                    <DialogDescription>
                        {/* Make changes to your profile here. Click save when you're done. */}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-2">
                                    <FormLabel className="whitespace-nowrap">Category Name :</FormLabel>
                                    <div className="w-full">
                                        <FormControl>
                                            <Input placeholder="Enter category name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mx-auto flex" size={'sm'}>Add</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
