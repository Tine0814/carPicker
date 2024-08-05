// import { UseFormRegister, FieldValues } from "react-hook-form";

import { ReactNode } from "react";

type CheckboxWithLabelProps = {
  name: string;
  label: ReactNode;
  //   register: UseFormRegister<FieldValues>;
  getValues?: (name: string) => any;
};

export default function CheckboxWithLabel({
  name,
  label,
}: //   register,
// getValues,
CheckboxWithLabelProps) {
  // const isChecked = !!getValues(name); // Coerce the value to boolean
  const isChecked = true; // Coerce the value to boolean

  return (
    <div className="flex justify-between items-center px-1 py-1 rounded-md">
      <label
        htmlFor={`${name}-checkbox`}
        className="ms-2 text-sm font-semibold"
      >
        {label}
      </label>
      <input
        id={`${name}-checkbox`}
        type="checkbox"
        // {...register(name)}
        className={`w-4 h-4 
            ${isChecked ? "text-green-600" : ""}
           checkbox-green bg-gray-100 border-gray-300 cursor-pointer rounded`}
      />
    </div>
  );
}
