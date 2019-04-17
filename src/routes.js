import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Home,
    })
);

export default Routes;


// import { createStackNavigator, createAppContainer } from 'react-navigation';

// import HomeScreen from './screens/HomeScreen'
// import NickName from './screens/NickName'

// export const RootStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//         NickName :NickName,
//     },
//     {
//         initialRouteName: 'NickName',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#00b1a6',
//                 border: '0px'
//             }
//         }
//     }
// );