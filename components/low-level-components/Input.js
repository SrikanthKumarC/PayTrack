import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <label
          className="text-p2 mb-[1px] text-p_foreground font-light w-full dark:text-gray-400  text-md sm:t "
          htmlFor="income"
        >
          {label}
        </label>
      )}
      <input
        className=" p-2  text-lg rounded-sm  focus:outline-solid outline-emerald-800 dark:hover:outline-emerald-800 dark:focus:bg-neutral-900 dark:focus:outline-emerald-800 dark:border-gray-600 dark:bg-transparent dark:border-[1px] m-0 border-2 w-full"
        {...props}
        id={label}
      />
    </div>
  );
};

export default Input;
