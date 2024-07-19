import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { changeSidebarSize } from '@/features/theme';

import Icon from '@/components/icon';

function Navbar() {
  const sidebarSize = useAppSelector(state => state.theme.sidebarSize);
  const dispatch = useAppDispatch();

  const iconName = sidebarSize === 'show' ? 'close' : 'show';
  const setSize = () => {
    if (sidebarSize === 'show') dispatch(changeSidebarSize('close'));
    else dispatch(changeSidebarSize('show'));
    document.getElementById('toggle-sidebar')?.click();
  };

  const List = [
    { icon: 'navigation', name: '导航链接', link: '/' },
    { icon: 'game', name: '袖珍游戏', link: '/games' },
    { icon: 'sandBeach', name: 'Wonder', link: '/wonder' }
  ];

  return (
    <header className="navbar">
      <Icon
        classes="w7.5 h7.5 p5 transition-all cursor-pointer hover:w8.5 hover:h8.5 hover:p4.5 hover:fill-active"
        name={iconName}
        handleClick={setSize}
      />

      <ul className="flex justify-start items-center h17.5 list-none p0 m0">
        {List.map(({ name, icon, link }) => (
          <li key={name}>
            <Link
              to={link}
              className="flex-center w30 h11 rounded mx2 color-[#333333] color-active hover:bg-[#f5f5f5]"
            >
              <Icon classes="w5 h5 mr2.5" name={icon} />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
