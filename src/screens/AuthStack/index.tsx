import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyOtp from './VerifyOtp';
import {RootStackParamList} from '../../types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Glue Labs Company Portal'}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
