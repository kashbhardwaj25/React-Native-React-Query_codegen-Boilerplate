import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './SignIn';
import SignUp from './SignUp';
import {RootStackParamList} from '../../types/navigationTypes';

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
    </Stack.Navigator>
  );
};

export default AuthStack;
