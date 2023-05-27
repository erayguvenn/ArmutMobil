import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    MyAccount: undefined;
    GetService: undefined;
    MyWorks: undefined;
    MyAccountAfterLogin: undefined;
    DefaultPage: undefined;
    Notifications: undefined;
    MyAccountInformation: undefined;
    ChangePassword: undefined;
    AddCreditCard: undefined;
    ContactHizmetim: undefined;
    AfterSelectService: undefined;
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

type MyAccountAfterLoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccountAfterLogin'>;
};

type NotificationsScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Notifications'>;
};

type MyAccountInformationScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccountInformation'>;
};

type ChangePasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'ChangePassword'>;
};

type AddCreditCardScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'AddCreditCard'>;
};

type ContactHizmetimScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'ContactHizmetim'>;
};
type AfterSelectServiceScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'AfterSelectService'>;
};
export type { RootStackParamList, LoginScreenProps, MyAccountScreenProps, GetServiceScreenProps, MyWorksScreenProps, MyAccountAfterLoginScreenProps, NotificationsScreenProps, MyAccountInformationScreenProps, ChangePasswordScreenProps, AddCreditCardScreenProps, ContactHizmetimScreenProps, AfterSelectServiceScreenProps };
