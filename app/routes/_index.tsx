import {
  type ActionArgs,
  type V2_MetaFunction
} from "@remix-run/node";
import { ValidatedForm, validationError } from "remix-validated-form";
import DynamicDropDown from "~/components/dropDown";
import Input from "~/components/input";
import { User } from "~/types/z.schema";
import { createUserSession } from "~/utils/session.server";
import { clientLoginValidator } from "~/validators/clientLoginValidator";
import { loginRequestValidator } from "~/validators/loginRequestValidator";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "IssueTracker" },
    {
      name: "description",
      content: "A issue tracking system to track the history of issues",
    },
  ];
};

// export async function action(args: ActionArgs) {
//   const formData = await args.request.clone().formData();
//   const _action = formData.get("_action");
//   if (_action === "USER_LOGIN") {
//     console.log("hello from product");
//     return userLoginAction(args);
//   }
//   throw new Error("Unknown action");
// }

export const action = async ({ request }: ActionArgs) => {
  const {data,error} = await loginRequestValidator.validate(request.formData());
  if (error) {
    return validationError(error);
  }

 
  return await createUserSession(
    data.id,
    data.user_type,
    "/admin"
  );
};

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
            name="userType"
            data={User}
            dataKey="userType"
            dataValueKey="userType"
          />
          <Input labelName="Username" inputType="text" name="username" />
          <Input labelName="Password" inputType="password" name="password" />

          {/* <ActionButton buttonName="Log In" value="USER_LOGIN" /> */}
          <button type="submit">Submit</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Please sign In as user if you are not Admin.
          </p>
        </ValidatedForm>
      </div>
    </div>
  );
}
