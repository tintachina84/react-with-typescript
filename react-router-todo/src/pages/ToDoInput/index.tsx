import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';
import { Title } from 'components/Title';
import { ToDoListContext } from 'contexts/ToDoList';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export const ToDoInput = () => {
  const navigate = useNavigate();
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState('');

  const onAddToDo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="Add TODO" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="Add" color="#304ffe" onClick={onAddToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};
