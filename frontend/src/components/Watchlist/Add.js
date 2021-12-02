import React, {useState} from 'react';
import Resultcard from "./Resultcard";


const Add = () => {
    const [query, setQuery]= useState("");
    const [results, setResults]= useState([]);

    const onChange= (e)=> {e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=16&page=1&sparkline=false&query=${e.target.value}`)
    .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

    return (
        <div>
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
            {results.length > 0 && (
            <ul className="results">
              {results.map((coin) => (
                <li key={coin.id}>
                  <Resultcard coin={coin} />
                </li>
              ))}
            </ul>
          )}
        </div>
    )
}

export default Add;
