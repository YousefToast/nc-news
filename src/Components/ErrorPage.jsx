import React from "react";

const ErrorPage = ({ err }) => {
  let msg = err.response.data.msg;
  let status = err.response.status;

  return (
    <div>
      <h3>Error!</h3>
      <p>{status}</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
