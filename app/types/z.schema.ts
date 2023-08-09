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

export const loginSchemaObj = z.object({
    username: zString(3, 50, "username"),
    type:zString(3, 50, "userType"),
    password:zString(3, 50, "password"),
})

export const loginValidator = withZod(loginSchemaObj);
