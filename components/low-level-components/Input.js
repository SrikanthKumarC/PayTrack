import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label
        className="text-p2 uppercase w-full dark:text-white m-0 tracking-wide text-sm sm:text-sm font-medium"
        htmlFor="income"
      >
        {label}
      </label>
      <br />
      <input
        className="p-2 mt-2 text-lg rounded-sm hover:outline-dashed focus:outline-dashed dark:bg-slate-800 dark:border-0 m-0 border-2 w-full"
        {...props}
        id={label}
      />
    </div>
  );
};

export default Input;
