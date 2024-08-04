import { Outlet } from 'react-router-dom';

import Navbar from './navbar';
import Sidebar from './sidebar';
import DeviceListener from './deviceListener';

function Layout() {
  return (
    <>
      <input type="checkbox" id="toggle-sidebar" />
      <Sidebar />
      <Navbar />
      <section>{<Outlet />}</section>
      <DeviceListener />
    </>
  );
}

export default Layout;
