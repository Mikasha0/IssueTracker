import { User, UserType } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { createIssue } from "~/Issue/services/createIssue";
import { getCurrentUser } from "~/utils/getCurrentUser";
import { createIssueServerValidator } from "~/validators/issue/createIssueServerValidator";


export async function createIssueAction({ request }: ActionArgs) {
    const user = (await getCurrentUser(request)) as User;
    return user?.user_type !== UserType.USER
      ? redirect("/login")
      : await validateAndCreateIssue(await request.formData(), user.username);
  }
  
export const validateAndCreateIssue = async(formData:FormData, reporter:string)=>{
    const {data, error} = await createIssueServerValidator.validate(formData);
    if (error){
        return validationError(error);
    }
    const issue = await createIssue({...data, reporter});
    return redirect(`/userDashBoard/issue/${issue.id}`)
}