import './index.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
      <button
          type="button"
          className={['button'].join(' ')}
          onClick={onClick}
          {...props}
      >
        {label}
      </button>
  );
};