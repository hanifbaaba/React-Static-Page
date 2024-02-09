import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
