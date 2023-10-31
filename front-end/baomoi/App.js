import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StatusBar, Image, Alert, TouchableOpacity } from 'react-native';

import Login from './screens/login'; 
import Category from './screens/category'; 
import Home from './screens/home';
import Search from './screens/search';
import Detail from './screens/detail';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#459ead" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{
          headerShown:false,
          transitionSpec:{
            open: { animation: 'timing', config: { duration: 10 } },
            close: { animation: 'timing', config: { duration: 10 } }
          }
        }}/>
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Category' component={Category} options={{headerShown:false,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-layouts.screen.width,0],
                    }),
                  },
                ],
              },
            };
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}