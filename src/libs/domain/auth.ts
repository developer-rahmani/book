import { z } from "zod";

import { translate } from "../config/translate/translate";

export const authSchema = z.object({
  username: z.string().min(1, {
    message: translate("auth.username.required"),
  }),
  password: z.string().min(1, {
    message: translate("auth.password.required"),
  }),
});

export type AuthSchema = z.infer<typeof authSchema>;
