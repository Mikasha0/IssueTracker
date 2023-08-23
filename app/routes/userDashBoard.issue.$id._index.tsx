import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import IssueDetailsCard from "~/components/IssueDetailsCard";
import Navbar from "~/components/Navbar";
import { getIssueDetails } from "~/loader/getIssueDetails";

export const loader = async(args:LoaderArgs) =>getIssueDetails(args);
export default function IssueDetails() {
  const {issue, user} = useLoaderData() 
  return(<>
     <Navbar />;
     <IssueDetailsCard issue={issue} user_id={user.id}/>
</>)
}
