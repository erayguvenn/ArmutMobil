import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    MyAccount: undefined;
    GetService: undefined;
    MyWorks: undefined;
    // Diğer sayfalar ve parametreleri
};

type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

type MyAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccount'>;
};
type GetServiceScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'GetService'>;
};

type MyWorksScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyWorks'>;
};

export type { RootStackParamList, LoginScreenProps, MyAccountScreenProps, GetServiceScreenProps, MyWorksScreenProps };
