import { db } from "~/utils/db.server";
import { toIssueWithDetailsDto } from "~/utils/helpers";

export const findOneIssue = async (user_id: string, id?: string) => {
    if (!id) {
      return null;
    }
    const issue = await db.issue.findUnique({
      where: {
        id,
        OR: [
          {
            reporter_id: user_id,
          },
          {
            assignee_id: user_id,
          },
        ],
      },
      select: {
        id: true,
        summary: true,
        description: true,
        created_at: true,
        status: true,
        reporter: {
          select: {
            username: true,
            id: true,
          },
        },
        assignee: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    return issue ? toIssueWithDetailsDto(issue) : null;
  };