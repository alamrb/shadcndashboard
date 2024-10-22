"use client"

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";

import { LoginSchema } from "@/schemas";

import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form";


export const Loginform = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password:""
        }
    }
    
    )
    

    const onSubmit = (values:z.infer<typeof LoginSchema>) => {
        console.log(values)
    }

    
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>

                {/* <form className="space-y-6" onSubmit={form.handleSubmit(() => {
                    
                })}> */}

                     <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>


                    <div className="space-y-4">
                        <FormField control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                        
                                            {...field}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                            
                        </FormField>
                        


                        <FormField control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                        
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                            
                            </FormField>
                    </div>
                    <Button type="submit" className="w-full">
                         Login       
                    </Button>

                </form>

            </Form>
        </CardWrapper>
    )
}