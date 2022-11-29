import React from "react";

// 사용자링크(label, url)들을 표시한다.
const UserLinks = (props) => {
  const { userLinks } = props.config;
  const { labeled } = props;
  return (
    <>
      { !userLinks ?
        null :
        <div className="flex flex-wrap justify-center items-center max-w-full">
          {userLinks.map((link) => (
            <a key={link.label} href={link.url} className="mx-2 px-2">
              {labeled ? link.label : ""}
            </a>
          ))}
        </div>
      }
    </>
  )
};

export default UserLinks;