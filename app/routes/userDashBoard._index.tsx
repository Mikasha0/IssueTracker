import { ActionArgs } from "@remix-run/node";
import { createIssueAction } from "~/action/createIssueAction";
import UserDashBoard from "~/components/UserDashBoard";

export const action = async(args:ActionArgs)=>createIssueAction(args);
export default function UserDash() {
  return (
    <UserDashBoard/>
  )
}
