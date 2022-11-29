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
    <div className="m-4 flex justify-left">
      <div className="mb-3 xl:w-96">
        <input
          type="search"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-2 focuse:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="post-search"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div>
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
    </div>
  )
};

export default Search;