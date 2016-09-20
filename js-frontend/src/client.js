/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import { initialize } from "./app";
/**
 * Fire-up React Router.
 */
initialize().then(({ provider }) => {
  const reactRoot = window.document.getElementById("root");
  ReactDOM.render(provider, reactRoot);
});


/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (process.env.NODE_ENV !== "production") {
  const reactRoot = window.document.getElementById("root");
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
    !reactRoot.firstChild.attributes["data-react-checksum"]) {
    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
  }
}