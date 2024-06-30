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
      <div className="header-mini">
        <Icon name={iconName} handleClick={setSize} />
      </div>
      <ul>
        {List.map(({ name, icon, link }) => (
          <li key={name}>
            <Link to={link}>
              <Icon name={icon} />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
