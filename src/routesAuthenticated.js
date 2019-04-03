import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import { useNavigationOptions } from './helpers/navigation';

const navigationOptions = useNavigationOptions();

const routes = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions
  },
  Profile: {
    screen: Profile,
    navigationOptions
  },
  Settings: {
    screen: Settings,
    navigationOptions
  },
  Login: {
    screen: Login,
    navigationOptions: {
      ...navigationOptions,
      title: 'Logout'
    }
  },
};

const MyDrawerNavigator = createDrawerNavigator(routes);

const DashboardIndex = createAppContainer(MyDrawerNavigator);

export default DashboardIndex;