import { HTMLInputTypeAttribute } from "react";
import { useField } from "remix-validated-form";

interface inputType {
  labelName: string;
  inputType: string;
  name: string;
}
export default function Input({ labelName, name, inputType }: inputType) {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`Enter ${name}`}
        {...getInputProps({
          type: inputType,
          onChange: (event) => console.log(event.target.value),
        })}
      />
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
}
