import styled from "@emotion/styled";

const Container = styled.button`
  border: 0;
  color: #fff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.5);
  }
`;

interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

export const Button = (props: Props) => {
    return (
    <Container onClick={props.onClick}>
      {props.label}
    </Container>
  );
}