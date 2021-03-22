import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage/MenuPage';
import { RecipesPage } from '../pages/RecipesPage/RecipesPage';

type RouteType = {
  url: string,
  name: string,
  component: React.FC
};

type RoutesOption = {
  [key: string]: RouteType,
};

const routes: RoutesOption = {
  'RECIPE_PAGE': {
    url: '/recipes',
    name: 'Рецепты',
    component: RecipesPage
  },
  'MENU_PAGE': {
    url: '/',
    name: 'Меню текущей недели',
    component: MenuPage
  }
};

const RoutesWithoutRoute = () => (
  <Switch>
    {Object.keys(routes).map((name, index) => {
      const item = routes[name];
      return (
        <Route path={item.url} component={item.component} />
      )
    })}
    <Redirect to="/" />
  </Switch>
);

const Routes = withRouter(RoutesWithoutRoute);

export { Routes };