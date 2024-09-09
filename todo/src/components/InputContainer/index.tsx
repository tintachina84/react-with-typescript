import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { ToDoInput } from "components/ToDoInput";
import { useState } from "react";

interface Props {
    readonly onAdd: (toDo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onAddTodo = (toDo: string) => {
        onAdd(toDo);
        setShowToDoInput(false);
    }

    return (
        <>
            { showToDoInput && <ToDoInput onAdd={ onAddTodo } />}
            <ShowInputButton
                show={ showToDoInput }
                onClick={ () => setShowToDoInput(!showToDoInput) }
            />
        </>
    );
}
