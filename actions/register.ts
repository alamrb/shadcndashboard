"use server"

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

import { db } from "@/lib/db";

import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // console.log(values);
    // revalidatePath();
    // revalidateTag()
    const validateFields = RegisterSchema.safeParse(values)
    if (!validateFields.success) {
        return {error:"Invalid fields!"}
    }

    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10)
    // const existingUser = await db.user.findUnique({
    //     where: {
    //         email,
    //     }
    // });


        const existingUser = await getUserByEmail(email)


    if (existingUser) {
        return {error:"Email already in used !"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });


    // Tod send verification token email

    return{success:"User created"}
}
