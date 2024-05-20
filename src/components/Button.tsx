type Button = {
  children: JSX.Element | string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: Button) => {
  return (
    <div>
      <button type="submit" className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
