/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function buttonToUp() {
  return (
    <div>
      <a
        href="#"
        className={`rounded-full fixed bottom-5 right-5 bg-black text-white py-3 px-4`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
     
    </div>
  );
}

export default buttonToUp;
