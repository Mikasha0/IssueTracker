import { useState } from "react";
import { tableName } from "~/types/z.schema";
import SearchBox from "./SearchBox";
import UserCreateModal from "./UserCreateModal";
import {IoMdAdd} from 'react-icons/io'
import { UserDetail } from "~/routes/adminDashBoard._index";

export default function UsersTable({ userList }: { userList: UserDetail[] }) {
  const [visible, setVisible] = useState(false);
  const toggleCreateUserModal = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white dark:bg-gray-900 mt-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative flex mt-1 justify-between">
          <SearchBox />
          <button
            className="bg-blue-700 text-sm text-white rounded-lg p-3 mr-3 "
            onClick={toggleCreateUserModal}
          >
           <IoMdAdd/>
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
          {userList.map((user, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.id}
              </th>
              <td className="px-6 py-4">{user.full_name}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.user_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
