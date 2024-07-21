import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Layout from '@/layout';
import Link from '@/pages/link';
import Games from '@/pages/games';
import Wonder from '@/pages/wonder';
import Puzzle from '@/pages/games/puzzle';
import Error from '@/pages/error';

const base = import.meta.env.VITE_BASE_URL;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={base} element={<Layout />} errorElement={<Error />}>
      <Route path="" element={<Link />} />
      <Route path="games" element={<Games />} />
      <Route path="games/puzzle" element={<Puzzle />} />
      <Route path="wonder" element={<Wonder />} />
    </Route>
  )
);

export default routes;
