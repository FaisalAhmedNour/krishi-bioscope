"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, object, string, z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { Checkbox } from "./ui/checkbox"
import axios from "axios"
import { IRecivedCategory } from "@/app/api/categories/interface"

const FormSchema = object({
    link: string().nonempty({ message: "Email is required" }),
    title: string().nonempty({ message: "Title is required" }),
    categories: z.array(z.string()).refine((value) => value.some((category) => category), {
        message: "You have to select at least one category.",
    }),
    date: date()
})

export default function VideoAddForm() {
    const { toast } = useToast()
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                // console.log("categories : ", response)
                setCategories(response.data.data);
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchCategories()
    }, [])

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            link: "",
            title: "",
            categories: [],
            date: new Date()
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response = await axios.post('/api/videos', data);
            // console.log("categories : ", response)
            // setCategories(response.data.data);
            toast({
                title: "Your message has been sent.",
            })
            setIsOpen(false);
            form.reset()
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-600" size={'sm'} onClick={() => setIsOpen(true)}>
                    <Plus className="h-5 w-5" /> Upload Video
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Upload Video</DialogTitle>
                    <DialogDescription>
                        {/* Make changes to your profile here. Click save when you're done. */}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center gap-2">
                                    <FormLabel>Link :</FormLabel>
                                    <div className="col-span-3">
                                        <FormControl className="col-span-3">
                                            <Input placeholder="Paste link here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center gap-2">
                                    <FormLabel>Title :</FormLabel>
                                    <div className="col-span-3">
                                        <FormControl className="col-span-3">
                                            <Input placeholder="Paste title here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categories"
                            render={() => (
                                <FormItem className="grid grid-cols-4 items-center gap-2">
                                    <div className="mb-4">
                                        <FormLabel>Categories :</FormLabel>
                                        {/* <FormDescription>
                                            Select the items you want to display in the sidebar.
                                        </FormDescription> */}
                                    </div>
                                    <div className="flex flex-wrap col-span-3 gap-x-4 gap-y-2">
                                        {categories.map((category: IRecivedCategory) => (
                                            <FormField
                                                key={category?._id}
                                                control={form.control}
                                                name="categories"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={category?._id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(category?._id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, category?._id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== category?._id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {category?.name}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center">
                                    <FormLabel>Date :</FormLabel>
                                    <FormControl className="col-span-3">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={
                                                        `w-[240px] pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`
                                                    }
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mx-auto flex" size={'sm'}>Upload</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
