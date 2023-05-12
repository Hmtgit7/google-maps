import React from "react";

const TransportToggle = (props) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex items-center p-2 rounded-md cursor-pointer font-semibold text-white"
      >
        <input
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
          ref={props.val}
        />
      </label>
    </>
  );
};

export default TransportToggle;
