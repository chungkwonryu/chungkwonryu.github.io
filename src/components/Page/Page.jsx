import React from "react";

// Page에서 본문을 감싸는 컴포넌트
const Page = ({ postNode, slug }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <article class="prose lg:prose-lg">
      <div className="py-6"
        dangerouslySetInnerHTML={{ __html: postNode.html }}
      />
    </article>
  );
};

export default Page;