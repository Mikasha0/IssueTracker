import { withZod } from "@remix-validated-form/with-zod";
import { verifyAssigneeUsername } from "~/Issue/services/createIssue";
import { createIssueFormSchema } from "~/types/z.schema";

export const createIssueServerValidator = withZod(
  createIssueFormSchema.refine(
    (data) => verifyAssigneeUsername(data.assignee),
    {
      message: "Assignee Does not exist",
      path: ["assignee"],
    }
  )
);
