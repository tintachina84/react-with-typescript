import {Button} from "../../atoms/Button";
import {Count} from "../../atoms/Count";
import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button label={'-'} onClick={() => setCount(count - 1)} />
      <Count count={count} />
      <Button label={'+'} onClick={() => setCount(count + 1)} />
    </div>
  );
}