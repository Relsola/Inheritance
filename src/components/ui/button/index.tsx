interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classname?: string;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, classname = '' } = props;
  return (
    <button
      className={`${classname} border-none bg-[#E6F4FE] text-[#0D74CE] hover:bg-[#D5EFFF] px2 py1 m2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
