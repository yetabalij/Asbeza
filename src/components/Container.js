import React from "react";

const Container = (props) => {
  return (
    <div className="w-[80%] mx-auto sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
      {props.children}
    </div>
  );
};

export default Container;
