import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'react-native';

import Login from './screens/login'; 
import Category from './screens/category'; 
import Home from './screens/home';
import Search from './screens/search';
import Detail from './screens/detail';
import Profile from './screens/profile';
import { useState } from 'react';
import { MyContext } from './context';

export default function App() {
  const Stack = createStackNavigator()
  let [configAccount, setConfigAccount] = useState({})
  let [account, setAccount] = useState({})
  let [ipv4, setIpv4] = useState("192.168.78.107")
  let [user, setUser] = useState({})
  let [publisher, setPublisher] = useState({})

  return (
    <MyContext.Provider value={{ configAccount, setConfigAccount, account, setAccount, ipv4, setIpv4, user, setUser, publisher, setPublisher }}>
      <NavigationContainer> 
      <StatusBar backgroundColor="#459ead" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 10 } },
            close: { animation: 'timing', config: { duration: 10 } }
          }
        }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Category' component={Category} options={{
          headerShown: false,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          }
        }} />
          <Stack.Screen name='Profile' component={Profile}
            options={{
              headerShown: false,
              cardStyleInterpolator: ({ current, layouts }) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                        }),
                      },
                    ],
                  },
                };
              },
            }}
          />

      </Stack.Navigator>
    </NavigationContainer> 

    </MyContext.Provider>
   
  );
}
