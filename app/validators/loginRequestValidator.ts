import { withZod } from "@remix-validated-form/with-zod";
import { authenticateUserLogin } from "~/utils/login.utils";
import { userInputSchema } from "~/types/z.schema";
import z from 'zod';

// export const loginRequestValidator = withZod(
//   userInputSchema.transform(async (data) => {return await authenticateUserLogin(data)}, {
//     message:"Username or Password don't match",
//     path:["password"]
//   })
// );

export const loginRequestValidator = withZod(userInputSchema.transform(async (data, ctx)=> {
    const  user = await authenticateUserLogin(data);
    if(!user){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:'Username or password is incorrect',
            path:["password"]
        });
        return z.NEVER;
    }
    return user;
}))

