import { z } from "zod";

export const contactSchema = z.object({
    fname: z.string()
        .min(3, "First name must be at least 3 characters")
        .nonempty("First Name is Required"),
    lname: z.string()
        .min(3, "Last name must be at least 3 characters")
        .nonempty("Last Name is Required"),
    email: z.string()
        .email("Invalid email address")
        .nonempty("Email is Required"),
    desc: z.string()
        .min(10, "Description must be at least 10 characters")
});
