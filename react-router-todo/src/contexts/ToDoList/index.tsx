import { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: () => {},
  onDelete: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(['TODO 1', 'TODO 2', 'TODO 3']);

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };
  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter(todo => todo !== toDo));
  };

  return <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>{children}</ToDoListContext.Provider>;
};

export { ToDoListContext, ToDoListContextProvider };
