import emojis from "./emojis.json";

const Line = ({ title, symbol }) => {
  return (
    <ul class="Line">
      <li>
        {title}
        {symbol}
      </li>
    </ul>
  );
};

export default Line;
