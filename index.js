const App = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("rgb(71, 46, 50)");

  const colors = [
    "rgb(39, 174, 96)",
    "rgb(115, 168, 87)",
    "rgb(39, 174, 96)",
    "rgb(52, 34, 36)",
    "rgb(243, 156, 18)",
    "rgb(189, 187, 153)",
    "rgb(71, 46, 50)",
  ];

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      const randomQuote = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomQuote]);
      const randomColor = Math.floor(Math.random() * colors.length);
      setColor(colors[randomColor]);
    };
    fetchData();
  }, []);

  const setNewQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomQuote]);
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  };

  return (
    <div style={{ backgroundColor: color, color: color }}>
      <div class="container">
        <div id="quote-box">
          <h3 id="text">{randomQuote.text}</h3>
          <p id="author" style={{ textAlign: "right" }}>
            - {randomQuote.author}
          </p>
          <div className="actions">
            <button
              id="new-quote"
              onClick={setNewQuote}
              style={{ backgroundColor: color }}
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
                  style={{ backgroundColor: color }}
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
