import { DataView } from 'pages/DataView';
import './App.css';
import styled from '@emotion/styled';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { Route, Routes } from 'react-router-dom';
import { ToDoInput } from './pages/ToDoInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                <h1>404</h1>
                <p>Page not found</p>
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
