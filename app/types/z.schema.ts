import { UserType } from '@prisma/client';
import { withZod } from '@remix-validated-form/with-zod';
import {z} from 'zod';
export const User = [
    { userType:"ADMIN"},
    { userType:"USER"},
]

const zString = (
    minLength = 1,
    maxLength = 100,
    field = "name",
    minMessage = "should not be empty or less than",
    maxMessage = "should not be greater than "
  ) => {
    return z
      .string()
      .min(minLength, { message: field + " " + minMessage + " " + minLength })
      .max(maxLength, { message: maxMessage + " " + maxLength });
  };

export const userInputSchema = z.object({
    username: zString(3, 50, "username"),
    //TODO not hardcode this
    user_type:z.enum([UserType.ADMIN, UserType.USER]),
    password:zString(3, 50, "password")
})

