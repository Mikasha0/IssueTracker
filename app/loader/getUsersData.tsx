import { DataFunctionArgs, LoaderArgs } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const getUsersData = async ({ request }: LoaderArgs) => {
    const url = new URL(request.url);
    const userName = url.searchParams.get("username");
  
    const userData = await db.user.findMany({
      where: userName ? { username: { equals: userName } } : undefined,
      select: {
        id: true,
        username: true,
        full_name: true,
        user_type: true,
      },
    });
  
    return userData;
  };