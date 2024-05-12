import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnKey }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food item"
        className={styles.Input}
        onKeyDown={handleOnKey}
      ></input>
    </div>
  );
};
export default FoodInput;
