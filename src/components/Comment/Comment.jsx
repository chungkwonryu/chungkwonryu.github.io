import React, { useState } from 'react'
import config from "../../../data/SiteConfig";
import Utterances from "./Utterances";

const Comment = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="text-center pt-4">
      {!isShow && (
        <button
          className="btn-primary"
          onClick={setIsShow}
        >
          {config.btnLoadComments}
        </button>
      )}
      {isShow && <Utterances />}
    </div>
  );
};

export default Comment;