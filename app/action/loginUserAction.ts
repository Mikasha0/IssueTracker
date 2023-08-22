import { ActionArgs } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { createUserSession } from "~/utils/session.server";
import { loginRequestValidator } from "~/validators/loginRequestValidator";

export const loginUserAction = async ({ request }: ActionArgs) => {
  const { data, error } = await loginRequestValidator.validate(
    await request.formData()
  );
  if (error) {
    return validationError(error);
  }
  return await createUserSession(
    data.id,
    data.user_type,
    `${data.user_type == "USER" ? "/userDashBoard" : "/adminDashBoard"}`
  );
};
