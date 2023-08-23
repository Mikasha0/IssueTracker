import { StatusType } from "@prisma/client";
import { z } from "zod";
import { createIssueFormSchema } from "~/types/z.schema";

export interface IssueWithReporterAndAssignee {
  id: string;
  summary: string;
  description: string;
  reporter: string;
  assignee: string;
  assignee_id: string;
  reporter_id: string;
  status: StatusType;
  created_at: string;
}

export type IssueWithNestedUsers = {
  id: string;
  summary: string;
  description: string;
  created_at: Date;
  status: StatusType;
  reporter: {
    username: string;
    id: string;
  };
  assignee: {
    username: string;
    id: string;
  };
}; 
export type createIssueFormInput = z.infer<typeof createIssueFormSchema>;
export type CreateIssueData = createIssueFormInput & {
  reporter: string;
};
