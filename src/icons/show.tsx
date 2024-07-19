const ShowIcon: React.FC<IconProps> = ({ handleClick = () => {}, classes }) => (
  <svg
    viewBox="0 0 1024 1024"
    className={classes || ''}
    xmlns="http://www.w3.org/2000/svg"
    onClick={handleClick}
  >
    <path d="M726.26176 698.40896l169.7792-169.82016-171.2128-171.66336 1.4336 341.48352zM897.67936 843.89888H147.57888V762.6752h750.10048zM628.77696 568.27904H147.57888v-81.22368h481.19808zM897.67936 292.6592H147.57888V211.43552h750.10048z"></path>
  </svg>
);

export default ShowIcon;
