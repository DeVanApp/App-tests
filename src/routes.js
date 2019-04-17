import { createAppContainer, createStackNavigator, createSwitchNavigator  } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const authScreens = createStackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
})

const Routes = createAppContainer(
    authScreens
);

export default Routes;
//{headerMode: 'none', initialRouteName: 'Login'}

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