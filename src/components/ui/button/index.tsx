interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classname?: string;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, classname = '' } = props;
  return (
    <button
      className={`${classname} cursor-pointer h8 text-xs border-none rounded-md
       bg-[#0047f112] text-[#002BB7C5] hover:bg-[#D5EFFF] active:bg-[#ACD8FC] px3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
