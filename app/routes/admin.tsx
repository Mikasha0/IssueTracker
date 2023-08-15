import { ActionArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { createUserAction } from "~/action/createUserAction";
import UserCreateModal from "~/components/UserCreateModal";
import UsersTable from "~/components/UsersTable";
import { db } from "~/utils/db.server";

interface loaderDataType {
  loaderData:string
}

export const loader = async () => {
  const userData = await db.user.findMany({
    select: {
      id: true,
      username: true,
      full_name: true,
      user_type: true
    }
  });

  return userData;
};
export async function action(args: ActionArgs) {
  const formData = await args.request.clone().formData();
  const _action = formData.get("_action");
  if (_action ==="CREATE_USER") {
    console.log("hello from product");
    return createUserAction(args);
  }
  throw new Error("Unknown action");
}
export default function adminPanel() {
  const [visible, setVisible] = useState(false);
  const toggleCreateUserModal = () => {
    setVisible(!visible);
  };

  const loaderData = useLoaderData<typeof loader>();
  return (
    <>
      <button
        className="bg-blue-700 text-sm text-white rounded-lg ml-5 p-2 mt-3"
        onClick={toggleCreateUserModal}
      >
        Create User
      </button>
      {visible && (
        <UserCreateModal toggleCreateUserModal={toggleCreateUserModal}/>
      )}
      <UsersTable loaderData={loaderData}/>
    </>
  );
}
