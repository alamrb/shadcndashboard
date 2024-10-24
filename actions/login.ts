"use server"

import { LoginSchema } from "@/schemas";
import * as z from "zod";



export const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    // revalidatePath();
    // revalidateTag()
    const validateFields = LoginSchema.safeParse(values)
    if (!validateFields.success) {
        return {error:"Invalid fields!"}
    }

    return{success:"Email sent!"}
}