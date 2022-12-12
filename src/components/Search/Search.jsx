import React, { useContext, useEffect, useState, useRef } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { useGatsbyPluginFusejs } from "react-use-fusejs";
import { AppContext } from "../../context/app";
import PostInfo from "../PostListing/PostInfo";

const Search = () => {
  const data = useStaticQuery(graphql`
    {
      fusejs {
        publicUrl
      }
    }
  `);

  const [query, setQuery] = useState('');
  const { fusejs, setFusejs } = useContext(AppContext);
  const result = useGatsbyPluginFusejs(query, fusejs);

  const fetching = useRef(false);

  useEffect(() => {
    if (!fetching.current && !fusejs && query) {
      fetching.current = true;

      fetch(data.fusejs.publicUrl)
        .then(res => res.json())
        .then(json => setFusejs(json));
    }
  }, [fusejs, query])

  return (
    <div className="p-4 m-4 flex flex-col justify-center items-center w-4/6 min-w-fit max-w-lg">
      <input
        type="search"
        className="form-control block min-w-full w-5/6 max-w-lg px-3 py-1.5 text-base font-normal bg-white dark:bg-neutral-900 autofill:bg-neutral-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-2 focus:border-sky-400 focus:outline-none"
        id="post-search"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="flex flex-col items-start mb-3 w-full max-w-4xl justify-center">
        {result.map(({ item }) => (
          <article
            key={item.id}
            className="flex flex-col"
          >
            <PostInfo post={item} />
          </article>
        ))}
      </div>
    </div>
  )
};

export default Search;