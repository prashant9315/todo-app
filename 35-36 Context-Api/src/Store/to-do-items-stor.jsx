import { createContext } from "react";
import { useReducer } from "react";

export const todoitemcontext = createContext({
  todoItems: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});

const todoItemsReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoitemcontextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <todoitemcontext.Provider value={{ todoItems, addNewItem, DeleteItem }}>
      {children}
    </todoitemcontext.Provider>
  );
};

export default TodoitemcontextProvider;
