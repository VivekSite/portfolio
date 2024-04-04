import React, { useState } from "react";
import Layout from "./../Layout/Layout";
import AboutPage from "./AboutPage";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const getWidth = () => {
    const { innerWidth: width} = window;
    return width;
  }

  return (
    <Layout>
      {/* ––––––––––––––––– About section ––––––––––––––– */}
      <AboutPage />

      {/* ––––––––––––––– Image section ––––––––––––––– */}
      <section style={{zIndex:'-1', position:'absolute', padding:'1.5rem 0 0 1.5rem'}} className="altImage">
        <h3>Please Wait...</h3>
      </section>
      <section id="image-search">
        <img src={`https://picsum.photos/${ getWidth() > 500 ? getWidth()-480 : getWidth()}/800?${search}`} alt="" />
      </section>

      {/* –––––––––––– SearchBar Section –––––––––––––––– */}
      <div id="searchBar">
        <input
          type="search"
          placeholder="Type To Get Random Images"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* –––––––––––––––– Notes section ––––––––––––––– */}
      <div style={{textAlign:'center', marginTop:'5rem'}}>
        <p style={{marginBottom:'1rem'}}>This is randomaly generated image. When you type something it will automatically  Generate Diffenrent Random Image.<br />You can Try this image generator</p>
        <a id="imageGen" href="https://viveksite.github.io/image_generator/" rel="noreferrer" target="_blank">click here to try</a>
      </div>

    </Layout>
  );
}
