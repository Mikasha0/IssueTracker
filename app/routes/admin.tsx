import { useState } from "react";
import UserCreateModal from "~/components/userCreateModal";

export default function adminPanel() {
  const [visible, setVisible] = useState(false);
  const toggleCreateUserModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button className="bg-blue-700 text-sm text-white rounded-lg ml-5 p-2 mt-3" onClick={toggleCreateUserModal}>Create User</button>
      {visible && (
        <UserCreateModal/>
      )}
    </>
  );
}
