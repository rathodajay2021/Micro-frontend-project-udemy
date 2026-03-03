import React from "react";
import ReactDom from "react-dom";
// mount the function to start up the app
const mount = (el) => {
  ReactDom.render(<h1>Hi there!</h1>, el);
};

// if we are in development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
    // return;
  }
}

// we are running though container and we should export the mount function
export { mount };
