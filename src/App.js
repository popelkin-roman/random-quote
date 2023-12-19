import { useState } from "react";
import verses from "./Data/verses.json";
// import "./App.scss";

function App() {
  const colors = ["#16A085", "#2C3E50", "#472E32", "#9B59B6", "#2C3E50"];
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getRandomVerse() {
    let randomVerseNumber = Math.floor(Math.random() * verses.length);
    return verses[randomVerseNumber];
  }

  let [currentColor, setCurrentColor] = useState(getRandomColor());
  let [currentVerse, setCurrentVerse] = useState(getRandomVerse());

  function newQuote(e) {
    e.preventDefault();
    setCurrentColor(getRandomColor());
    setCurrentVerse(getRandomVerse());
  }

  return (
    <div
      className="App container-fluid vh-100"
      style={{
        backgroundColor: currentColor,
        color: currentColor,
        transition: "all 1s",
      }}
    >
      <div
        id="quote-box"
        className="position-absolute top-50 start-50 translate-middle bg-light p-4"
        style={{ maxWidth: 450, minWidth: 300 }}
      >
        <div className="quote-text text-center fs-4">
          <i className="fa fa-quote-left me-2"> </i>
          <span id="text">{currentVerse.verse}</span>
        </div>
        <div className="quote-author d-flex justify-content-end my-3 fs-5">
          -{" "}
          <span id="author" className="ms-2">
            {currentVerse.author}
          </span>
        </div>
        <div className="buttons row">
          <div className="col d-flex justify-content-start">
            <a
              className="button btn mx-1 text-light"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              rel="noreferrer"
              href={
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(
                  '"' + currentVerse.verse + '" ' + currentVerse.author
                )
              }
              style={{ backgroundColor: currentColor, transition: "all 1s" }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button btn mx-2 text-light"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="/"
              style={{ backgroundColor: currentColor, transition: "all 1s" }}
            >
              <i className="fa fa-tumblr"></i>
            </a>
          </div>

          <div className="col d-flex justify-content-end">
            <button
              className="button btn text-light"
              id="new-quote"
              onClick={newQuote}
              style={{ backgroundColor: currentColor, transition: "all 1s" }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
