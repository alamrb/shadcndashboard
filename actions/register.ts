"use server"

import { RegisterSchema } from "@/schemas";
import * as z from "zod";



export const register = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    // revalidatePath();
    // revalidateTag()
    const validateFields = RegisterSchema.safeParse(values)
    if (!validateFields.success) {
        return {error:"Invalid fields!"}
    }

    return{success:"Email sent!"}
}