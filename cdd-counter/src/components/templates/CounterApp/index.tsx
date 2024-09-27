import {Title} from "../../atoms/Title";
import {Counter} from "../../organisms/Counter";
import './index.css';

export const CounterApp = () => {
  return (
    <div className={'counter-app'}>
      <Title title={'Counter App'} />
      <Counter />
    </div>
  );
}