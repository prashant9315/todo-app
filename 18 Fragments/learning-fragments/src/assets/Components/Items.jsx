import styles from "./Items.module.css";
const Items = ({ kkp, handleBuybutton }) => {
  return (
    <li class="list-group-item">
      {kkp}
      <button
        type="button"
        class={`${styles.button} btn btn-info`}
        onClick={handleBuybutton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
