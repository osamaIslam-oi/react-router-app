import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message;

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "404 Not found";
    message = "Could not find resource or page.";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default Error;
