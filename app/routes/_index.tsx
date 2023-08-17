import { LoaderArgs, V2_MetaFunction, redirect } from "@remix-run/node";
import { getCurrentUser } from "~/utils/getCurrentUser";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderArgs) {
  const user = await getCurrentUser(request);
  console.log(user);
  return user ? redirect("/dashboard") : redirect("/login");
}

export default function Index() {
  return <div>Hello World</div>;
}
