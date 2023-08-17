import { LoaderArgs, redirect } from "@remix-run/node";
import { getCurrentUser } from "~/utils/getCurrentUser";

export async function verifyUserLoader({ request }: LoaderArgs) {
  return (await getCurrentUser(request)) ? redirect("/") : null;
}
