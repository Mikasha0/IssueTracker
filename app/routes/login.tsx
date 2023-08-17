import { LoaderArgs, type ActionArgs } from "@remix-run/node";
import { loginUserAction } from "~/action/loginUserAction";
import LoginForm from "~/components/LoginForm";
import { verifyUserLoader } from "~/loader/verifyUserLoader";

export const loader = async (args: LoaderArgs) => verifyUserLoader(args);

export async function action(args: ActionArgs) {
  const formData = await args.request.clone().formData();
  const _action = formData.get("_action");
  if (_action === "USER_LOGIN") {
    return loginUserAction(args);
  }
  throw new Error("Unknown action");
}

export default function Login() {
  return (
    <LoginForm/>
  );
}
