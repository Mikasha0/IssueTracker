import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createIssueAction } from "~/action/createIssueAction";
import UserDashBoard from "~/components/UserDashBoard";
import { userDashBoardLoader } from "~/loader/userDashBoardLoader";

export const loader = async (args: LoaderArgs) => userDashBoardLoader(args);

export const action = async (args: ActionArgs) => createIssueAction(args);
export default function UserDash() {
  const data = useLoaderData() as {
    users: string[];
    userId: number;
  };
  return <UserDashBoard userList={data.users}/>;
}
