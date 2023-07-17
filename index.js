const App = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState(randomColor());

  function randomColor() {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    return `rgb(${red},${green},${blue})`;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      const randomQuote = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomQuote]);
      setColor(randomColor());
    };
    fetchData();
  }, []);

  const setNewQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomQuote]);
    setColor(randomColor());
  };

  const transition = "all 1s ease-in-out";

  return (
    <div style={{ backgroundColor: color, transition }}>
      <div className="container">
        <div id="quote-box" style={{ transition }}>
          <h3 id="text">{randomQuote.text}</h3>
          <p id="author" style={{ textAlign: "right" }}>
            - {randomQuote.author}
          </p>
          <div className="actions">
            <button
              id="new-quote"
              onClick={setNewQuote}
              style={{ backgroundColor: color, transition }}
            >
              New quote
            </button>
            <div className="icons">
              <a
                href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20battles%20that%20count%20aren%E2%80%99t%20the%20ones%20for%20gold%20medals.%20The%20struggles%20within%20yourself%E2%80%93the%20invisible%20battles%20inside%20all%20of%20us%E2%80%93that%E2%80%99s%20where%20it%E2%80%99s%20at.%22%20Jesse%20Owens"
                id="tweet-quote"
                target="_blank"
              >
                <i
                  className="fa-brands fa-twitter"
                  style={{ backgroundColor: color, transition }}
                ></i>
              </a>
              <a
                href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Jesse%20Owens&amp;content=The%20battles%20that%20count%20aren%E2%80%99t%20the%20ones%20for%20gold%20medals.%20The%20struggles%20within%20yourself%E2%80%93the%20invisible%20battles%20inside%20all%20of%20us%E2%80%93that%E2%80%99s%20where%20it%E2%80%99s%20at.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                id="tumblr-quote"
                target="_blank"
              >
                <i
                  className="fa-brands fa-tumblr"
                  style={{ backgroundColor: color }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
