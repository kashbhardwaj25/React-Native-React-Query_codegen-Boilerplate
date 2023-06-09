import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyOtp from './VerifyOtp';
import {RootStackParamList} from '../../types/navigationTypes';
import AppStack from '../AppStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'FIFO'}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
