import React from "react";
import Icon from "../img/meme_icon.png"
import AppData from "../AppData";

function Meme() {

  const [url, setUrl] = React.useState("");

  function invokeMeme(e) {
    e.preventDefault();
    const randomMeme = AppData.data.memes[Math.floor(Math.random() * AppData.data.memes.length)];
    setUrl(randomMeme.url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <button onClick={invokeMeme}>Get a new meme image <img src={Icon} className="btn-img" /></button>
      </div>
      <div className="meme-img-cont">
        <img src={url} />
      </div>
    </main>
  )
}

export default Meme;