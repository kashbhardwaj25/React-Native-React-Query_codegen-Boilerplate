import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import VerifyOtp from './VerifyOtp';
import useUserStore from '../../store/userStore';
import graphqlRequestClient from '../../services/api';
import {useMeQuery} from '../../services/api/fifoServer';
import {getErrorMessageAndCode} from '../../utils/helpers';
import {RootStackParamList} from '../../types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const {setIsLoggedIn} = useUserStore();

  useMeQuery(graphqlRequestClient(), undefined, {
    onError(error) {
      const {code} = getErrorMessageAndCode(error);

      if (code === 'UNAUTHENTICATED') {
        setIsLoggedIn(false);
      }
    },
  });

  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'FIFO'}} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    </Stack.Navigator>
  );
};

export default AppStack;
