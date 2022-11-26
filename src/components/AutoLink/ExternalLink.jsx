import React from "react";

// _blank : 새 윈도우 창을 열어서 웹페이지를 연다.
// noreferrer : (웹 브라우저를 위한 속성) 링크를 클릭했을 때 HTTP
//            referrer header를 넘기지 않음
// noopener : (보안을 위한 속성) 열린 쪽에서 자바 스크립트를 이용해서
//            window.opener 속성으로 접근할 수 없도록 함
const ExternalLink = ({ className, to, children, style }) => (
  <a
    className={className}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    style={{ ...style }}
  >
    {children}
  </a>
);

export default ExternalLink;