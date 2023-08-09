import type { V2_MetaFunction } from "@remix-run/node";
import ActionButton from "~/components/actionButton";
import DynamicDropDown from "~/components/dropDown";
import Input from "~/components/input";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "IssueTracker" },
    { name: "description", content: "A issue tracking system to track the history of issues" },
  ];
};

export default function Index() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <DynamicDropDown labelName="User Type" name="userType" />
              <Input labelName="Username" inputType="text" name="username" />
              <Input
                labelName="Password"
                inputType="password"
                name="password"
              />

              <ActionButton buttonName="Log In" value="CREATE_LOGIN" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Please sign In as user if you are not Admin.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
