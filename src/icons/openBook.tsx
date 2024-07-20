const OpenBook: React.FC<IconProps> = ({ classes }) => (
  <svg
    className={classes || ''}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M355.2 928H188.8c-51.2 0-92.8-41.6-92.8-92.8V188.8c0-51.2 41.6-92.8 92.8-92.8h166.4c51.2 0 92.8 41.6 92.8 92.8v646.4c0 51.2-41.6 92.8-92.8 92.8zM188.8 160c-16 0-28.8 12.8-28.8 28.8v646.4c0 16 12.8 28.8 28.8 28.8h166.4c16 0 28.8-12.8 28.8-28.8V188.8c0-16-12.8-28.8-28.8-28.8H188.8z m502.4 779.2c-41.6 0-78.4-27.2-89.6-68.8l-168-624c-12.8-49.6 16-100.8 65.6-113.6l161.6-43.2c24-6.4 49.6-3.2 70.4 9.6 20.8 12.8 36.8 32 43.2 56l168 624c12.8 49.6-16 100.8-65.6 113.6L715.2 936c-8 1.6-16 3.2-24 3.2z m-6.4-790.4c-3.2 0-4.8 0-8 1.6l-161.6 43.2c-16 4.8-24 19.2-20.8 35.2l168 624c4.8 16 19.2 24 35.2 20.8l161.6-43.2c16-4.8 24-19.2 20.8-35.2l-168-624c-1.6-8-6.4-14.4-12.8-17.6-4.8-3.2-9.6-4.8-14.4-4.8z"></path>
  </svg>
);

export default OpenBook;
