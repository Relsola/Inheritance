interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { children, onClick = () => {} } = props;
  return (
    <button
      className="border-none bg-[#E6F4FE] text-[#0D74CE] hover:bg-[#D5EFFF]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
