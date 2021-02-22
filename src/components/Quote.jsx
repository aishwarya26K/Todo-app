import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

function Quote({ fetchUrl }) {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchUrlData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setQuotes(request.data.contents.quotes);
      console.log(request.data.contents.quotes);
      return request;
    }
    fetchUrlData();
  }, [fetchUrl]);

  return (
    <div className="quote_container">
      <div className="quote_body">
        <div className="quote_text">"{quotes.map((item) => item.quote)}"</div>
        <div className="quote_author hide">
          {quotes.map((item) => item.author)}
        </div>
      </div>
    </div>
  );
}

export default Quote;
