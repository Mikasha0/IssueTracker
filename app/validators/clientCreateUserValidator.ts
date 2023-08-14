import { withZod } from "@remix-validated-form/with-zod";
import { userSchema } from "~/types/z.schema";

export const clientCreateUserValidator = withZod(userSchema);