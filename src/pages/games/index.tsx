import { Link } from 'react-router-dom';

function Games() {
  const base = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <h1>Games</h1>
      <Link
        to={base + 'games/puzzle'}
        className="flex-center w30 h11 rounded mx2 color-[#333333] color-active hover:bg-[#f5f5f5]"
      >
        <h3>Puzzle</h3>
      </Link>
    </>
  );
}

export default Games;
