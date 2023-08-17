import { LoaderArgs, redirect } from "@remix-run/node";
import { getUserSession } from "~/utils/getCurrentUser";
import { destroySession } from "~/utils/session.server";

export const logoutLoader = async ({ request }: LoaderArgs) => {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
