import React from "react";
import { IssueWithReporterAndAssignee } from "~/Issue/types/issue.types";
interface IssueDetailsCardType{
  issue: IssueWithReporterAndAssignee,
  user_id:string
}

export default function IssueDetailsCard({issue, user_id}:IssueDetailsCardType) {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-left">Summary</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Reporter</th>
            <th className="py-3 px-4 text-left">Assignee</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Created At</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-4">{issue.summary}</td>
            <td className="py-3 px-4">{issue.description}</td>
            <td className="py-3 px-4">{issue.reporter}</td>
            <td className="py-3 px-4">{issue.assignee}</td>
            <td className="py-3 px-4">{issue.status}</td>
            <td className="py-3 px-4">{issue.created_at}</td>
          </tr>
          {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-4">Issue 2 Summary</td>
        <td className="py-3 px-4">Description of Issue 2</td>
        <td className="py-3 px-4">User 2</td>
        <td className="py-3 px-4">User 1</td>
        <td className="py-3 px-4">Open</td>
        <td className="py-3 px-4">2023-08-23</td>
      </tr> */}
        </tbody>
      </table>
    </div>
  );
}
