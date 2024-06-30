import { Outlet } from 'react-router-dom';

import Navbar from './navbar';
import Sidebar from './sidebar';
import './index.less';

function Layout() {
  return (
    <>
      <input type="checkbox" id="toggle-sidebar" />
      <Sidebar />
      <Navbar />
      <section className="content">{<Outlet />}</section>
    </>
  );
}

export default Layout;
