import React from 'react';
import { View, Text, Button } from 'react-native';
import DrawerComp from './components/Drawer';



function App() {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <DrawerComp />
  );
}
export default App;
