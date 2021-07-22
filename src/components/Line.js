import emojis from "../emojis.json";

const Line = ({ title, symbol }) => {
  return (
    <ul class="Line">
      <li onClick={() => navigator.clipboard.writeText(symbol)}>
        <p>{title}</p>
        <p>{symbol}</p>
      </li>
    </ul>
  );
};

export default Line;
