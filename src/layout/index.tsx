import { Outlet } from 'react-router-dom';

import Navbar from './navbar';
import Sidebar from './sidebar';

function Layout() {
  return (
    <>
      <input type="checkbox" id="toggle-sidebar" />
      <Sidebar />
      <Navbar />
      <section>{<Outlet />}</section>
    </>
  );
}

export default Layout;
