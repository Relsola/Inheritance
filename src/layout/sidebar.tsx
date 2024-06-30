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
    <aside className="sidebar">
      <div className="sidebar-logo">{show ? 'Relsola' : 'Sola'}</div>

      <ul>
        {LinkData.map(({ type, title }) => (
          <li key={type} onClick={() => handleScrollToTop(type)}>
            <Icon name={type} />
            {show && title}
          </li>
        ))}
      </ul>

      <footer className="sidebar-footer">
        <Icon name="submission" />
        {show && '建议投稿'}
      </footer>
    </aside>
  );
}

export default Sidebar;
