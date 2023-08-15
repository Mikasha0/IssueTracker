import { ActionArgs, redirect } from "@remix-run/node";

export const findUserName = async({request}:ActionArgs)=>{
    const findUserData = await request.formData();
    const find_user = findUserData.get("find_user") as string;
    return redirect(`/admin/?username=${find_user}`)
}