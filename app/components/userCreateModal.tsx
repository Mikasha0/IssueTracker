import { ValidatedForm } from "remix-validated-form";
import { User } from "~/types/z.schema";
import { clientCreateUserValidator } from "~/validators/clientCreateUserValidator";
import ActionButton from "./ActionButton";
import DynamicDropDown from "./DropDown";
import NormalButton, { btnType } from "./NormalButton";
import Input from "./TextInputField";

interface toggleCreateUserModalType {
  toggleCreateUserModal: () => void;
}
export default function UserCreateModal({
  toggleCreateUserModal,
}: toggleCreateUserModalType) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="w-[400px] bg-white p-6 rounded-lg z-10">
        <ValidatedForm validator={clientCreateUserValidator} method="POST">
          <Input labelName="Name" name="full_name" inputType="text" />
          <Input labelName="Username" name="username" inputType="text" />
          <DynamicDropDown
            labelName="User Type:"
            name="user_type"
            data={User}
            dataKey="userType"
            dataValueKey="userType"
          />
          <Input labelName="Password" name="password" inputType="password" />
          <Input labelName="Confirm Password" name="confirm_password" inputType="password" />

          <div className="mt-4 flex justify-end">
            <NormalButton
              buttonName="Cancel"
              type={btnType.submit}
              onClick={toggleCreateUserModal}
            />
            <ActionButton buttonName="Create User" value="CREATE_USER" />
          </div>
        </ValidatedForm>
      </div>
    </div>
  );
}
