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
import MyAccountAfterLogin from './MyAccountAfterLogin';
import MyAccountInformation from '../pages/MyAccountInformation';
import ChangePassword from '../pages/ChangePassword';
import AddCreditCard from '../pages/AddCreditCard';
import ContactHizmetim from '../pages/ContactHizmetim';
import AfterSelectService from '../pages/AfterSelectService';



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
            } else if (route.name === 'MyWorks') {
              iconName = focused ? 'work' : 'work-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-none';
            } else if (route.name === 'MyAccount') {
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
        <Tab.Screen name="GetService" options={{ headerShown: false, title: "Hizmet Al" }} >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="GetService" options={{ headerShown: false }} component={GetService} />
              <Stack.Screen name="AfterSelectService" options={{ title: 'Ev Temizliği' }} component={AfterSelectService} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyWorks" options={{ headerShown: false, title: "İşlerim" }} >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="DefaultPage" options={{ headerShown: false }} component={DefaultPage} />
              <Stack.Screen name="MyWorks" options={{ title: 'İşlerim' }} component={MyWorks} />
              <Stack.Screen name="Login" options={{ title: 'Giriş yap' }} component={Login} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Notifications" options={{ title: "Bildirimler" }} component={Notifications} />
        <Tab.Screen name="MyAccount" options={{ headerShown: false, title: "Hesabım" }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyAccount" component={MyAccount} />
              <Stack.Screen name="MyAccountAfterLogin" options={{ title: 'Hesabım' }} component={MyAccountAfterLogin} />
              <Stack.Screen name="MyAccountInformation" options={{ title: 'Hesap Bilgilerim' }} component={MyAccountInformation} />
              <Stack.Screen name="ChangePassword" options={{ title: 'Şifre Değiştir' }} component={ChangePassword} />
              <Stack.Screen name="AddCreditCard" options={{ title: 'Kredi Kartı Ekle' }} component={AddCreditCard} />
              <Stack.Screen name="GetService" options={{ title: 'Hizmet Al' }} component={GetService} />
              <Stack.Screen name="ContactHizmetim" options={{ title: 'Hizmetime Ulaş' }} component={ContactHizmetim} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}