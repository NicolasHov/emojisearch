import emojis from "./emojis.json";
import Line from "./Line";
const Search = ({ func, search, setSearch }) => {
  return (
    <div class="Search">
      <h1>😎EmojiSearch😎</h1>

      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        onChange={func}
      />
      {emojis.map((elem, index) => {
        setSearch(search.toLowerCase());
        if (elem.keywords.indexOf(search) !== -1) {
          return <Line key={index} title={elem.title} symbol={elem.symbol} />;
        }
        return <div></div>;
      })}
    </div>
  );
};

export default Search;
