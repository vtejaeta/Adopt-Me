import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
