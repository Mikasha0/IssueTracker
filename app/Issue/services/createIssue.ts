import { SelectUserOptions, WhereUserOptions, findOneUser } from "~/utils/getAllUser"

export const verifyAssigneeUsername = async(id:string) =>{
    const where:WhereUserOptions = {id};
    const select:SelectUserOptions = {id:true};
    return await findOneUser(where, select);
} 