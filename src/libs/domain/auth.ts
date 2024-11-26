import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(1, {
    message: "auth.username.required",
  }),
  password: z.string().min(1, {
    message: "auth.password.required",
  }),
});

export type AuthSchema = z.infer<typeof authSchema>;
