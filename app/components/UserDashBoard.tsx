import { ValidatedForm } from "remix-validated-form";
import { createIssueClientValidator } from "~/validators/issue/createIssueClientValidator";
import TextInputField from "./TextInputField";
import ActionButton from "./ActionButton";
import DropDown from "./DropDown";

export default function UserDashBoard() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f4f6] mb-4 ">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
          Create Issue
        </h1>
        <ValidatedForm validator={createIssueClientValidator} method="POST">
          <TextInputField labelName="Issue" name="issue" inputType="text" />
          <TextInputField
            labelName="Description"
            name="description"
            inputType="text"
          />
          {/* <DropDown labelName="Assignee" name="assignee" data={userList}  /> */}
          <div className="mt-3">
          <ActionButton buttonName="Create Issue" value="Create_Issue" />

          </div>
        </ValidatedForm>
      </div>
    </div>
  );
}
