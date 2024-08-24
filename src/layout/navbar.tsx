import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/icon';

const base = import.meta.env.VITE_BASE_URL;

function Navbar() {
  const [activeIndex, setActiveIndex] = useState<string>('');
  useEffect(() => {
    const [path = ''] = window.location.pathname.split('/').filter(Boolean);
    setActiveIndex(path);
  }, []);

  const List = [
    { icon: 'navigation', name: '导航链接', link: '' },
    { icon: 'game', name: '袖珍游戏', link: 'games' },
    { icon: 'toolBox', name: '工具箱', link: 'toolBox' },
    { icon: 'sandBeach', name: 'Wonder', link: 'wonder' }
  ];

  return (
    <header className="pos-sticky top-0 h12 overflow-auto glass-effect">
      <style>
        {`
        header::-webkit-scrollbar {
          display: none;
        }

        header {
          -ms-overflow-style: none; scrollbar-width: none;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        `}
      </style>

      <div className="flex justify-center items-center min-w-125 py1 glass-effect">
        {List.map(({ name, icon, link }) => (
          <Link
            key={name}
            to={base + link}
            className="pos-relative flex-center w25 h8 rounded mx2 color-[#333333] color-active hover:bg-[#f5f5f5]"
            onClick={() => setActiveIndex(link)}
          >
            <Icon classes="w4 h4 mr2" name={icon} />
            {name}

            {link === activeIndex && (
              <span className="pos-absolute bottom-0 left-0 w25 h.5 bg-active"></span>
            )}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
