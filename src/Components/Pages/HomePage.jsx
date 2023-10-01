import React, { useState } from "react";
import Layout from "./../Layout/Layout";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const getWidth = () => {
    const { innerWidth: width} = window;
    return width;
  }

  return (
    <Layout>
      <div id="searchBar">
        <input
          type="search"
          placeholder="Type To Get Random Images"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section style={{zIndex:'-1', position:'absolute', padding:'1.5rem 0 0 1.5rem'}} className="altImage">
        <h3>Please Wait...</h3>
      </section>
      <section id="image-search">
        <img src={`https://picsum.photos/${ getWidth() > 500 ? getWidth()-480 : getWidth()}/800?${search}`} alt="Please Wait..." />
      </section>
    </Layout>
  );
}
