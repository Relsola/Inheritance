import Icon from '@/components/icon';
import { useAppSelector } from '@/app/hooks';
import LinkData from '@/data/link.json';

function Sidebar() {
  const show = useAppSelector(state => state.theme.sidebarSize) === 'show';

  const handleScrollToTop = (type: string) => {
    document
      .getElementById(`link-item-${type}`)!
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside>
      <div className="h9 text-center text-4xl font-bold py5">
        {show ? 'Relsola' : 'Sola'}
      </div>

      <ul className="list-none p-0 m-0">
        {LinkData.map(({ type, title }) => (
          <li
            className="w40 h11 flex justify-start items-center px2.5 text-sm mx2.5 my0.5 rounded cursor-pointer color-active bgt-1"
            key={type}
            onClick={() => handleScrollToTop(type)}
          >
            <Icon classes="w6 h6 mr2" name={type} />
            {show && title}
          </li>
        ))}
      </ul>

      <footer className="w40 h11 absolute bottom-2 flex justify-start items-center px2.5 text-sm mx2.5 rounded cursor-pointer color-active bgt-1">
        <Icon name="submission" classes="w6 h6 mr2" />
        {show && '建议投稿'}
      </footer>
    </aside>
  );
}

export default Sidebar;
