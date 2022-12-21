import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const Routes = {
  '/': Home,
  '/favorite': Favorite,
  '/resto/:id': Detail,
};

export default Routes;
