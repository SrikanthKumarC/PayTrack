import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <label
          className="text-p2 text-p_foreground font-light capitalize w-full dark:text-white m-0 tracking-wide text-md sm:text-sm "
          htmlFor="income"
        >
          {label}
        </label>
      )}
      <input
        className=" p-2 mt-2 text-lg rounded-sm  focus:outline-dashed dark:hover:outline-white dark:focus:outline-white border-shade dark:bg-p_dark dark:border-0 m-0 border-2 w-full"
        {...props}
        id={label}
      />
    </div>
  );
};

export default Input;
