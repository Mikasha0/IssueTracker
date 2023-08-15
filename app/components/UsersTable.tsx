import { tableName } from "~/types/z.schema";
import UserCreateModal from "./UserCreateModal";
import { useState } from "react";
import { Form } from "@remix-run/react";
import ActionButton from "./ActionButton";
import SearchBox from "./SearchBox";
interface usersTableType {
  loaderData: Array<any>;
}
export default function UsersTable({ loaderData }: usersTableType) {
  const [visible, setVisible] = useState(false);
  const toggleCreateUserModal = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>

        <div className="relative flex mt-1 justify-between">
          <SearchBox />

          <button
            className="bg-blue-700 text-sm text-white rounded-lg p-3 mr-3 "
            onClick={toggleCreateUserModal}
          >
            Create User
          </button>
          {visible && (
            <UserCreateModal toggleCreateUserModal={toggleCreateUserModal} />
          )}
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableName.map((table_name) => (
              <th key={table_name} scope="col" className="px-6 py-3">
                {table_name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loaderData.map((userDetails) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {userDetails.id}
              </th>
              <td className="px-6 py-4">{userDetails.full_name}</td>
              <td className="px-6 py-4">{userDetails.username}</td>
              <td className="px-6 py-4">{userDetails.user_type}</td>

              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
