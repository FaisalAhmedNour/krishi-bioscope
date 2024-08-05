"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  category: z.string()
})

export function CategorySearch({ categories }) {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    router.push(`/category/${data.category}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.handleSubmit(onSubmit)();
                }}
              >
                <SelectTrigger className="w-[220px] focus:ring-0 focus:ring-offset-0 border-2">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {
                      categories?.data?.map((category) => {
                        return <SelectItem value={category._id}>
                          {category?.name}
                        </SelectItem>
                      })
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />  
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
