import { withZod } from "@remix-validated-form/with-zod";
import { clientValidationSchema } from "~/types/z.schema";

export const clientCreateUserValidator = withZod(clientValidationSchema);