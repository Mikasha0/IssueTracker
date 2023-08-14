import { withZod } from "@remix-validated-form/with-zod";
import { userSchema } from "~/types/z.schema";
import { registerUser } from "~/utils/register.utils";

export const serverCreateUserValidator = withZod(
  userSchema.transform(async (data, ctx) => {
    const user = registerUser(data);
    if(!user){

    }
    return user;
  })
);
