import emojis from "../emojis.json";
import Line from "./Line";
const Search = ({ func, search, setSearch }) => {
  let counter = 0;
  return (
    <div class="Search">
      <h1>😎EmojiSearch😎</h1>

      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        onChange={func}
      />
      <span>Click on an emoji if you want to copy it</span>
      {emojis.map((elem, index) => {
        setSearch(search.toLowerCase());
        if (counter === 16) {
          return <></>;
        }
        if (elem.keywords.indexOf(search) !== -1) {
          counter += 1;
          return <Line key={index} title={elem.title} symbol={elem.symbol} />;
        }
        return <div></div>;
      })}
    </div>
  );
};

export default Search;
