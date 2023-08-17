import UserIssueForm from "./UserIssueForm";

export default function UserDashBoard({ userList }: { userList: string[] }) {
  return (
    <>
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Services</a>
            </div>
            <a href="#" className="text-white">Logout</a>
        </div>
    </nav>

      <UserIssueForm userList={userList} />
    </>
  );
}
