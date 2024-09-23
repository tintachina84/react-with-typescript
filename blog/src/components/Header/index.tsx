import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  width: calc(100% - 40px);
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Header = () => {
  return (
    <Container>
      <Title>Posts</Title>
    </Container>
  );
}