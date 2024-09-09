import styled from "@emotion/styled";
import { Title } from "components/Title";
import { ToDoList } from "components/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface Props {
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const DataView = ({ toDoList, onDelete }: Props) => {
    return (
        <Container>
            <Title label="Todo list" />
            <ToDoList toDoList={ toDoList } onDelete={ onDelete } />
        </Container>
    );
}