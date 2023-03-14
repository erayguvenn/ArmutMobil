import React from 'react';

import DrawerComp from './components/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccount from './pages/MyAccount';
import Login from './components/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <DrawerComp />
    </>

  );
}
export default App;

