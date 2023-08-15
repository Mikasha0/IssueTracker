import { z } from "zod";
import { clientValidationSchema } from "~/types/z.schema";
import { db } from "./db.server";
import { passwordHash } from "./login.utils";
type registerUser = z.infer<typeof clientValidationSchema>;
export const registerUser = async ({
  full_name,
  username,
  user_type,
  password,
  confirm_password,
}: registerUser) => {
  const hashedPassword = await passwordHash(password);
  const hashedConfirmPassword = await passwordHash(confirm_password);
  console.log(hashedConfirmPassword);

  if (password !== confirm_password) {
    return null;
  } else {
    const user = await db.user.create({
      data: {
        full_name,
        username,
        user_type,
        password: hashedPassword,
      },
    });

    return {id: user.id, user_type: user.user_type, full_name: user.full_name, password:user.password}
  }
};
