import React from "react";
import Icon from "../img/meme_icon.png"
import AppData from "../AppData";

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://play-lh.googleusercontent.com/Oe8twVdZFIyM5Htji5awa_wVV2IyU6O5vZKjTh4LmUbzAG2Q4iM2FBZAS_l4NazoCaY"
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function invokeMeme(e) {
    e.preventDefault();
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme(function (meme) {
      return {
        ...meme,
        url: randomMeme.url
      }
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value
      }
    });

  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange} />

        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange} />

        <button onClick={invokeMeme}>Get a new meme image <img src={Icon} className="btn-img" /></button>
      </div>
      <div className="meme-img-cont">
        <img src={meme.url} />
        <h3 className="upper-text">{meme.topText}</h3>
        <h3 className="bottom-text">{meme.bottomText}</h3>
      </div>
    </main>
  )
}

export default Meme;