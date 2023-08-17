interface DynamicDropDownTypes {
  labelName: string;
  name: string;
  data: Array<any>;
}

export default function DynamicDropDown({
  labelName,
  name,
  data,
}: DynamicDropDownTypes) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <select
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
