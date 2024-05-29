import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  console.log(err.status);

  return (
    <div>
      <h1>Oops! Something went wrong!! </h1>
      <h3>
        <i>
          {err.status}: {err.statusText}
        </i>
      </h3>
    </div>
  );
};

export default Error;
