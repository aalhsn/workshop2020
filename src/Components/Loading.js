import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Loading = () => (
  <div id="loading" className="spinner mx-automt-5 text-center">
    <FontAwesomeIcon icon={faRocket} spin size="4x" />
  </div>
);

export default Loading;
