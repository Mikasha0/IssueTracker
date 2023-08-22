import { clientLoginValidator } from "~/validators/clientLoginValidator";
import DynamicDropDown from "./DropDown";
import { User } from "~/types/z.schema";
import TextInputField from "./TextInputField";
import ActionButton from "./ActionButton";
import { ValidatedForm } from "remix-validated-form";


export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f4f6] mb-4 ">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
          Sign in to your account
        </h1>
        <ValidatedForm
          className="space-y-4 md:space-y-6"
          validator={clientLoginValidator}
          method="post"
        >
          <DynamicDropDown
            labelName="User Type"
            name="user_type"
            data={User}
          />
          <TextInputField labelName="Username" inputType="text" name="username" />
          <TextInputField labelName="Password" inputType="password" name="password" />

          <ActionButton buttonName="Log In" value="USER_LOGIN" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Please sign In as user if you are not Admin.
          </p>
        </ValidatedForm>
      </div>
    </div>  )
}
