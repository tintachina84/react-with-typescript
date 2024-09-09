import { DataView } from "components/DataView";
import "./App.css";
import styled from "@emotion/styled";
import { useState } from "react";
import { InputContainer } from "components/InputContainer";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    'TDOO 1',
    'TDOO 2',
    'TDOO 3'
  ]);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  }

  return (
    <Container>
      <DataView toDoList={ toDoList } onDelete={ onDelete } />
      <InputContainer onAdd={ onAdd } />
    </Container>
  );
}

export default App;
