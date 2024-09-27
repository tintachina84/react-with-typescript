import './index.css';

export interface CountProps {
  count: number;
}

export const Count = ({
  count,
}: CountProps) => {
  return (
    <span
      className={['count'].join(' ')}
    >{count}</span>
  );
}