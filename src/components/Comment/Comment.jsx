import React, { useEffect } from 'react'
import config from "../../../data/SiteConfig";

const Comment = () => {
  const commentsInjectionRoot = React.createRef();

  useEffect(() => {
    if (commentsInjectionRoot.current?.children.length === 0) {
      const scriptEl = document.createElement('script')
      scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
      scriptEl.setAttribute('crossorigin', 'anonymous')
      scriptEl.setAttribute('async', 'true')
      scriptEl.setAttribute(
        'repo',
        config.utteranceRepo
      )
      scriptEl.setAttribute('issue-term', 'pathname')
      scriptEl.setAttribute('theme', 'github-light')
      commentsInjectionRoot.current?.appendChild(scriptEl)
    }
  }, [])

  return (
    <div className="container pt-8">
      <h1 className="mt-0 mb-0 text-3xl font-normal leading-normal">
        Comments
      </h1>
      <hr className="my-0" />
      <div ref={commentsInjectionRoot} />
    </div>
  )
};

export default Comment;