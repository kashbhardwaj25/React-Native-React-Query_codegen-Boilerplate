import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from './SignIn'
import { RootStackParamList } from '../../types/navigationTypes'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'FIFO' }} />
    </Stack.Navigator>
  )
}

export default AuthStack
