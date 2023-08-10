import { ActionArgs, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
// import { UserType } from "@prisma/client";
import { authenticateUserLogin } from "~/utils/login.utils";
import { createUserSession } from "~/utils/session.server";
import { loginRequestValidator } from "~/validators/loginRequestValidator";

export const userLoginAction = async ({ request }: ActionArgs) => {
  const {data,error} = await loginRequestValidator.validate(request.formData());
  if (error) {
    return validationError(error);
  }

 
  return await createUserSession(
    data.id,
    data.user_type,
    "/"
  );
};
