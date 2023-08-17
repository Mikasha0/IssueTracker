import { ActionArgs, redirect } from "@remix-run/node";
import { validationError } from 'remix-validated-form';
import { serverCreateUserValidator } from "~/validators/serverCreateUserValidator";

export const createUserAction = async({request}:ActionArgs) =>{
    const {data,error} = await serverCreateUserValidator.validate(await request.formData());
   if(error){
    return validationError(error);
   }

   return redirect('/adminDashBoard')
}