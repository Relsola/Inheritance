import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import ToolBox from './module/toolBox';
import Games from './module/games';

import Layout from '@/layout';
import Link from '@/pages/link';
import Wonder from '@/pages/wonder';
import Error from '@/pages/error';

const base = import.meta.env.VITE_BASE_URL;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={base} element={<Layout />} errorElement={<Error />}>
      <Route path="" element={<Link />} />
      <Route path="wonder" element={<Wonder />} />
      {Games}
      {ToolBox}
    </Route>
  )
);

export default routes;
