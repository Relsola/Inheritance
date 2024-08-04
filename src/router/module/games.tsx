import { Route } from 'react-router-dom';

import Games from '@/pages/games';
import Puzzle from '@/pages/games/puzzle';

export default (
  <>
    <Route path="games" element={<Games />}></Route>
    <Route path="games/puzzle" element={<Puzzle />} />
  </>
);
