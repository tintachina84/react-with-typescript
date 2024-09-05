import { Component } from "react";
import { IScriptSnapshot } from 'typescript';
import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Label } from "components/Label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// function App() {
//   const [counter, setCounter] = useState(0);
//   const sub = () => setCounter(counter - 1);
//   const add = () => setCounter(counter + 1);

//   return (
//     <Container>
//       <Title>Counter App</Title>
//       <Content>
//         <Button label="-" onClick={sub} />
//         <Label data={counter} />
//         <Button label="+" onClick={add} />
//       </Content>
//     </Container>
//   );
// }

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  private sub = () => this.setState({ counter: this.state.counter - 1 });
  private add = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Title>Counter App</Title>
        <Content>
          <Button label="-" onClick={this.sub} />
          <Label data={counter} />
          <Button label="+" onClick={this.add} />
        </Content>
      </Container>
    );
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps: ', nextProps);
    console.log('prevState: ', prevState);

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);

    return {
      testData: true,
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
    console.log('componentDidUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('componentDidCatch');
    console.log('error: ', error);
    console.log('info: ', info);
    // this.setState({
    //   error: true,
    // });
  }
}

export default App;
