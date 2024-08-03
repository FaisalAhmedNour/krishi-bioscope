"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    email: z.string().nonempty({ message: "Email is required" }).email({
        message: "Must be a valid email.",
    }),
    password: z.string().nonempty({ message: "Password is required" })
})

export default function Admin() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // })
        toast({
            title: "Your message has been sent.",
        })
    }

return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px] space-y-6 border rounded-xl p-5">
                <h1 className="font-semibold text-xl text-center">Admin</h1>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@mail.com" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="********" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="mx-auto flex" size={'sm'}>Submit</Button>
            </form>
        </Form>
    </div>
)
}
