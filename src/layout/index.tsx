import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import DeviceListener from './deviceListener';

function Layout() {
  return (
    <>
      <Navbar />

      <section className="w-full min-h[calc(100vh-50px)] bg-[#f5f5f5]">
        {<Outlet />}
      </section>

      <DeviceListener />
    </>
  );
}

export default Layout;
