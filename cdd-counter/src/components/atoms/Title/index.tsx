import './index.css';

export interface TitleProps {
  title: string;
}

export const Title = ({
  title,
  ...props
}: TitleProps) => {
  return (
    <h1
      className={['title'].join(' ')}
      {...props}
    >{title}</h1>
  );
}