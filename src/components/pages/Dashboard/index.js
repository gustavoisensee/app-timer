import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Dashboard from './Dashboard'
import Login from '../Login';

const routes = {
  Dashboard: {
    screen: Dashboard,
  },
  Settings: {
    screen: Login,
  }
};

const configs = {};

const MyDrawerNavigator = createDrawerNavigator(routes, configs);

const DashboardIndex = createAppContainer(MyDrawerNavigator);

export default DashboardIndex;