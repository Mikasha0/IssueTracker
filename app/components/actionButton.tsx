import { MouseEventHandler } from "react";

interface ActionButtonTypes {
  buttonName: string;
  value?: string;
  onClick?: MouseEventHandler;
}
export default function ActionButton({
  buttonName,
  value,
  ...inputProps
}: ActionButtonTypes) {
  return (
    <button
      type="submit"
      name="_action"
      value={value}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      {...inputProps}
    >
      {buttonName}
    </button>
  );
}
