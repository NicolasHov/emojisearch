import "./App.css";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState(" ");
  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="container">
      <Search func={handleChange} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
