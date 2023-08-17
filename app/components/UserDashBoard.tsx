import Navbar from "./Navbar";
import UserIssueForm from "./UserIssueForm";

export default function UserDashBoard({ userList }: { userList: string[] }) {
  return (
    <>
      <Navbar />
      <UserIssueForm userList={userList} />
    </>
  );
}
