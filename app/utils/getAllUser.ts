import { UserType } from "@prisma/client";
import { db } from "~/utils/db.server";

export interface WhereUserOptions {
    username?: string;
    id?: string;
    user_type?: UserType;
  }
export interface SelectUserOptions {
  id: boolean;
  username?: boolean;
  full_name?: boolean;
  user_type?: boolean;
}
export const getAdminAndUser = async () => {
  return await db.user.findMany({
    select: {
      full_name: true,
      username: true,
      user_type: true,
    },
  });
};

export const getAllUser = async () => {
  return await db.user.findMany({
    where: {
      user_type: UserType.USER,
    },
    select: {
      id: true,
      full_name: true,
      username: true,
      user_type: true,
    },
  });
};

export const findOneUser = async (
  where: WhereUserOptions,
  select: SelectUserOptions
) => {
  return await db.user.findFirst({
    where,
    select,
  });
};

export const getAllUserName = async () =>
  toUsernameList(
    await db.user.findMany({
      where: {
        user_type: UserType.USER,
      },
      select: {
        username: true,
      },
    })
  );

const toUsernameList = (users: { username: string }[]) =>
  users.map((user) => user.username);
