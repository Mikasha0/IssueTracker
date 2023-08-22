import { MouseEventHandler } from "react";
interface NormalButtonTypes {
  buttonName: string;
  type?: btnType;
  onClick?: ()=>void;
}
export enum btnType {
  submit = "submit",
  button = "button",
  reset = "reset",
}
export default function NormalButton({
  buttonName,
  type,
  onClick,
}: NormalButtonTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {buttonName}
    </button>
  );
}
