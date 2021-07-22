import "./App.css";
import emojis from "./emojis.json";
import { useState } from "react";
import Search from "./Search";
function App() {
  const [search, setSearch] = useState(" ");
  const handleChange = (elem) => {
    const value = elem.target.value;
    setSearch(value);
  };
  return (
    <div class="container">
      <Search func={handleChange} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
