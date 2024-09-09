import styled from "@emotion/styled";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { Title } from "components/Title";
import { useState } from "react";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
    dlsplay: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    readonly onAdd: (toDo: string) => void;
}

export const ToDoInput = ({ onAdd }: Props) => {
    const [toDo, setToDo] = useState('');

    const onAddToDo = () => {
        if (toDo === '') return;

        onAdd(toDo);
        setToDo('');
    }

    return (
        <Container>
            <Background />
            <Contents>
                <Title label="Add TODO" />
                <InputContainer>
                    <TextInput value={ toDo } onChange={ setToDo } />
                    <Button label="Add" color="#304ffe" onClick={ onAddToDo } />
                </InputContainer>
            </Contents>
        </Container>
    )
}



