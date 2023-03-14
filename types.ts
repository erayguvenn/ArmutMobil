import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  MyAccount: undefined;
  // Diğer sayfalar ve parametreleri
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

type MyAccountScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MyAccount'>;
};

export type { RootStackParamList, LoginScreenProps, MyAccountScreenProps };
