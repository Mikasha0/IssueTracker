import { UserType } from "@prisma/client";
import { LoaderArgs, redirect } from "@remix-run/node";
import { getAllUserName } from "~/utils/getAllUser";
import { getCurrentUser } from "~/utils/getCurrentUser";

export const userDashBoardLoader = async ({ request }: LoaderArgs) => {
  const user = await getCurrentUser(request);
  const users = await getAllUserName();
  users.map((users)=>{ console.log(users[0])})
  return user?.user_type !== UserType.USER
    ? redirect("/login")
    : {
        users: await getAllUserName(),
        userId: user.id,
      };
};
