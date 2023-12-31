import { UserType } from '@prisma/client';
import { z } from 'zod';
export const User = [
   "ADMIN",
   "USER"
]

export const tableName = [
  'id',
  'full_name',
  'username',
  'user_type',
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

export const userSchema = userInputSchema.extend({
  full_name:zString(3,35, "Name")
})
export const clientValidationSchema = userSchema.extend({
  confirm_password:zString(3,35, "Confirm Password")
}).refine((schema)=>{
  return schema.password === schema.confirm_password
},{
  message:"Password and Confirm Password do not match",
  path:['confirm_password']
})
export type user = z.infer<typeof userSchema>

export const createIssueFormSchema = z.object({
    summary:zString(3,50,"Summary"),
    description:zString(3, 100, "Description"),
    assignee:z.string().min(1)
 })