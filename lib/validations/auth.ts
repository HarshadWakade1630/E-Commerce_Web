import{z} from "zod"

export const registerSchema = z.object({
    name: z.string().min(4),
    email:z.email(),
    password:z.coerce.string().min(8).max(10),
})

export const loginSchema = z.object({
    email:z.email(),
    password:z.coerce.string().min(8),
})

export const verifyOtpSchema = z.object({
    email:z.email(),
    otp:z.string().length(6),
})

export const resetPassSchema = z.object({
    email:z.email(),
    password:z.string().min(8,"Password must be atleast 8 characters"),
})