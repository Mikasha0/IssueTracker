import { UserType } from "@prisma/client";
import { LoaderArgs, redirect } from "@remix-run/node";
import { getCurrentUser } from "~/utils/getCurrentUser";

export const loader = async({request}:LoaderArgs)=>{
    const user = await getCurrentUser(request);
    console.log(user);
    if(user?.user_type === UserType.ADMIN){
        return redirect('/adminDashBoard')
    }else if(user?.user_type === UserType.USER){
        return redirect('/userDashBoard')
    }
}