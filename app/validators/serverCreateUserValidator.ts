import { withZod } from "@remix-validated-form/with-zod";
import { clientValidationSchema, userSchema } from "~/types/z.schema";
import { registerUser } from "~/utils/register.utils";
import { z } from "zod";

export const serverCreateUserValidator = withZod(
  clientValidationSchema.transform(async (data, ctx) => {
    const user = await registerUser(data);
    console.log(data.confirm_password);
    if (!user) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "password do not match",
        path: ["confirm_password"],
      });
      return z.NEVER;
    }
    return user;
  })
);
