import styles from "./ButtonsContainer.module.css";
const Buttonscontainer = ({ onClickbutton }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {buttonName.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onClickbutton(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttonscontainer;
