import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../pages/Notifications';
import GetService from '../pages/GetService';
import MyAccount from '../pages/MyAccount';
import MyWorks from '../pages/MyWorks';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Login from './Login';
import DefaultPage from './DefaultPage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerComp() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'GetService') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'İşlerim') {
              iconName = focused ? 'work' : 'work-outline';
            } else if (route.name === 'Bildirimler') {
              iconName = focused ? 'notifications' : 'notifications-none';
            } else if (route.name === 'Hesabım') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return iconName ? (
              <MaterialIcons name={iconName} size={size} color={color} />
            ) : (
              <MaterialIcons name="default-icon-name" size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="GetService" options={{ title: 'Hizmet Al' }} component={GetService} />
        <Tab.Screen name="İşlerim" options={{ headerShown: false }} >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="DefaultPage" options={{ headerShown: false }} component={DefaultPage} />
              <Stack.Screen name="MyWorks" options={{ title: 'İşlerim' }} component={MyWorks} />
              <Stack.Screen name="Login" options={{ title: 'Giriş yap' }} component={Login} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Bildirimler" component={Notifications} />
        <Tab.Screen name="Hesabım" options={{ headerShown: false }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyAccout" component={MyAccount} />
              <Stack.Screen name="Login" options={{ title: 'Giriş yap' }} component={Login} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>


  );
}