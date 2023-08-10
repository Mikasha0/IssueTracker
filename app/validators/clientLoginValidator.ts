import { withZod } from "@remix-validated-form/with-zod";
import { userInputSchema } from "~/types/z.schema";

export const clientLoginValidator = withZod(userInputSchema);