import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from './src/component/Home';
import Akun from './src/component/Akun';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Barang') {
              iconName = focused ? 'bag-handle-outline' : 'bag-remove-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'person-circle-outline' : 'person-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            height: 60,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Akun" component={Akun } />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
