import { type ActionArgs, type V2_MetaFunction } from "@remix-run/node";
import { ValidatedForm } from "remix-validated-form";
import { userLoginAction } from "~/action/userLoginAction";
import ActionButton from "~/components/ActionButton";
import DynamicDropDown from "~/components/DropDown";
import Input from "~/components/TextInputField";
import { User } from "~/types/z.schema";
import { clientLoginValidator } from "~/validators/clientLoginValidator";

export async function action(args: ActionArgs) {
  const formData = await args.request.clone().formData();
  const _action = formData.get("_action");
  if (_action === "USER_LOGIN") {
    console.log("hello from product");
    return userLoginAction(args);
  }
  throw new Error("Unknown action");
}



export default function Index() {
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
            dataKey="userType"
            dataValueKey="userType"
          />
          <Input labelName="Username" inputType="text" name="username" />
          <Input labelName="Password" inputType="password" name="password" />

          <ActionButton buttonName="Log In" value="USER_LOGIN" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Please sign In as user if you are not Admin.
          </p>
        </ValidatedForm>
      </div>
    </div>
  );
}
