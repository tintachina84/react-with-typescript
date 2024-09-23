import './App.css';
import styled from "@emotion/styled";
import {Header} from "./components/Header";
import {BlogPost} from "./components/BlogPost";
import {useEffect, useState} from "react";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly id: number;
  readonly userId: string;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
    }, 1000);
  }, []);

  return (
      <Container>
        <Header />
        {posts.map(post => (
            <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label='Write' color='blue' onClick={() => setShowForm(true)} />
        </ButtonContainer>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </Container>
  );
}

export default App;
