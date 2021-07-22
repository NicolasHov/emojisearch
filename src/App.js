import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState(" ");
  const handleChange = (elem) => {
    const value = elem.target.value;
    setSearch(value);
  };
  return (
    <div class="container">
      <Search func={handleChange} search={search} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default App;
