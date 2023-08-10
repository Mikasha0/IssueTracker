import {db} from './db.server'
import * as bcrypt from 'bcryptjs';
import z from 'zod'
import { userInputSchema } from '~/types/z.schema';

type LoginType = z.infer<typeof userInputSchema>
export const passwordHash = async(password:string)=>{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword
}
export const authenticateUserLogin = async ({ username, password, user_type }: LoginType) => {
  const user = await db.user.findUnique({
    where: { username, user_type },
  });

  return  user && await bcrypt.compare(password, user.password) ? {id:user.id, user_type: user.user_type}:null
};
