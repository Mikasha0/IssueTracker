import {
  SelectUserOptions,
  WhereUserOptions,
  findOneUser,
} from "~/utils/getAllUser";
import { CreateIssueData } from "../types/issue.types";
import { db } from "~/utils/db.server";

export const createIssue = async (createIssueData: CreateIssueData) => {
  const issue = await db.issue.create({
    data: {
      summary: createIssueData.summary,
      description: createIssueData.description,
      assignee: {
        connect: {
          username: createIssueData.assignee,
        },
      },
      reporter: {
        connect: {
          username: createIssueData.reporter,
        },
      },
    },
    select: {
      id: true,
      assignee: {
        select: {
          id: true,
        },
      },
      reporter: {
        select: {
          username: true,
        },
      },
    },
  });
//   const event_url = `${IssueEvent.issue_created + "/" + issue.assignee.id}`;
//   emitter.emit(event_url, issue.reporter.username);
  return issue;
};

export const verifyAssigneeUsername = async (username: string) => {
  const where: WhereUserOptions = { username };
  const select: SelectUserOptions = { id: true };
  return await findOneUser(where, select);
};
