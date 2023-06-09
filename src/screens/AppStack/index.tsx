import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import {RootStackParamList} from '../../types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'FIFO'}} />
    </Stack.Navigator>
  );
};

export default AppStack;
