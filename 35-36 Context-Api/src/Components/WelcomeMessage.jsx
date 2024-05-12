import styles from "./WelcomeMessage.module.css";
import { todoitemcontext } from "../Store/to-do-items-stor";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoItems } = useContext(todoitemcontext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
