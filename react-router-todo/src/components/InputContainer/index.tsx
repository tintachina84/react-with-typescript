import { ShowInputButton } from "components/ShowInputButton";
import { ToDoInput } from "components/ToDoInput";
import { useState } from "react";

interface Props {
    readonly onAdd: (toDo: string) => void;
}

export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onClose = () => {
        setShowToDoInput(false);
    };

    return (
        <>
            { showToDoInput && <ToDoInput onClose={ onClose } />}
            <ShowInputButton
                show={ showToDoInput }
                onClick={ () => setShowToDoInput(!showToDoInput) }
            />
        </>
    );
}
