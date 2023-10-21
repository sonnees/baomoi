import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'react-native';

import Login from './screens/login'; 


export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#459ead" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} 
          options={{
            headerTitle:"ĐĂNG NHẬP",
            headerStyle: {
              backgroundColor: '#459ead'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:16
            },
            headerTitleAlign:'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
