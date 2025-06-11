"use client"
import React from 'react'


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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { subjects } from '@/constants'




const formSchema = z.object({
    name: z.string().min(1, { message: "Name must be at least 2 characters.", }),
    subject: z.string().min(1, { message: "Subject must be atleat one of the options", }),
    topic: z.string().min(1, { message: "Topic must be chosen from the options.", }),
    voice: z.string().min(1, { message: "Voice must be chosen from the options.", }),
    style: z.string().min(1, { message: "Style must be chosen from the options.", }),
    duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})


export const CompanionForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion Nam1</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Companion Name " {...field} className='input' />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}>
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select The Subjects" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((subject) => (
                                        <SelectItem
                                            value={subject}
                                            key={subject}
                                            className="capitalize input">
                                            {subject}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            </FormControl>
                            

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help you learn?</FormLabel>
                            <FormControl>
                                <Input placeholder=" Ex : Derivatives & Integrals" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}>
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select The Voice" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>

                                </SelectContent>
                            </Select>
                            </FormControl>
                            

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}>
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select The Voice" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Formal">Formal</SelectItem>
                                    <SelectItem value="Informal">Informal</SelectItem>

                                </SelectContent>
                            </Select>
                            </FormControl>
                            

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated duration of the session</FormLabel>
                            <FormControl>

                                <Input
                                    type = "number"
                                    placeholder="30 mins " {...field} 
                                    className = "input" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>


    )

}
export default CompanionForm