const CloseIcon: React.FC<IconProps> = ({ handleClick = () => {} }) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    onClick={handleClick}
  >
    <path d="M61.78 792.27h898.58v84.24H61.78zM960.35 665.9L763.79 525.5l196.56-140.4zM61.78 483.39h589.69v84.24H61.78zM61.78 174.89h898.58v84.24H61.78z"></path>
  </svg>
);

export default CloseIcon;
