import { UserType } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createUserAction } from "~/action/createUserAction";
import { findUserName } from "~/action/findUserName";
import UsersTable from "~/components/UsersTable";
import { getUsersData } from "~/loader/getUsersData";

export interface UserDetail {
  id:string,
  full_name: string;
  username: string;
  user_type: UserType;
}

export const loader = async (args: LoaderArgs) => await getUsersData(args);
export async function action(args: ActionArgs) {
  const formData = await args.request.clone().formData();
  const _action = formData.get("_action");
  if (_action === "CREATE_USER") {
    return createUserAction(args);
  } else if (_action === "Find_UserName") {
    return findUserName(args);
  }
  throw new Error("Unknown action");
}
export default function adminPanel() {
  const data = useLoaderData<typeof loader>() as UserDetail[];
  return <UsersTable userList={data} />;
}
