import { UserType } from "@prisma/client";
import { LoaderArgs, redirect } from "@remix-run/node";
import { findOneIssue } from "~/Issue/services/getIssue";
import { getCurrentUser } from "~/utils/getCurrentUser";

export const getIssueDetails = async({request, params}:LoaderArgs) => {
  const user = await getCurrentUser(request);
  return user?.user_type !== UserType.USER? redirect('/login'):{
    user,
    issue: await findOneIssue(user.id, params.id)
  }
}
