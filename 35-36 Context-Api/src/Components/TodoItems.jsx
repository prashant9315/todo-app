import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { todoitemcontext } from "../Store/to-do-items-stor";

const TodoItems = () => {
  const { todoItems, DeleteItem } = useContext(todoitemcontext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={DeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
