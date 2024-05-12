import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <input
      className={styles.container}
      type="text"
      value={calVal}
      readOnly
    ></input>
  );
};
export default Display;
