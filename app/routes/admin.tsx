import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createUserAction } from "~/action/createUserAction";
import { findUserName } from "~/action/findUserName";
import UsersTable from "~/components/UsersTable";
import { getUsersData } from "~/loader/getUsersData";

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
  const loaderData = useLoaderData<typeof loader>();
  return <UsersTable loaderData={loaderData} />;
}
