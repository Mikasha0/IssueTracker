import { withZod } from "@remix-validated-form/with-zod"
import { createIssueFormSchema } from "~/types/z.schema"

export const createIssueClientValidator = withZod(createIssueFormSchema);