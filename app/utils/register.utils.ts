import { user } from "~/types/z.schema";
import { db } from "./db.server";
import { passwordHash } from "./login.utils";

export const registerUser = async ({
  full_name,
  username,
  user_type,
  password,
}: user) => {
    const hashedPassword = await passwordHash(password)

  const user = await db.user.create({
    data: {
      full_name,
      username,
      user_type,
      password:hashedPassword,
    },
  });

  return user
    ? { id: user.id, user_type: user.user_type, full_name: user.full_name }
    : null;
};
