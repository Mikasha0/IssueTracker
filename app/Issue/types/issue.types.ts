import {z}  from 'zod';
import { createIssueFormSchema } from "~/types/z.schema"

export type createIssueFormInput = z.infer<typeof createIssueFormSchema>
export type CreateIssueData = createIssueFormInput & {
    reporter:string;
}