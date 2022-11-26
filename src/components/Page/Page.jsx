import React from "react";

// Page에서 본문을 감싸는 컴포넌트
const Page = ({ postNode, slug }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <div>
      <div className="py-6"
        dangerouslySetInnerHTML={{ __html: postNode.html }}
      />
    </div>
  );
};

export default Page;