// import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App container">
      <div
        id="quote-box"
        className="position-absolute top-50 start-50 translate-middle"
      >
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i>
          <span id="text">
            The two most important days in your life are the day you are born
            and the day you find out why.
          </span>
        </div>
        <div className="quote-author">
          - <span id="author">Mark Twain</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href="/"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            href="/"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button btn" id="new-quote">
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
