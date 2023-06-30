import { createStackNavigator } from '@react-navigation/stack'

import Home from '../../screens/AppStack/Home'
import Profile from '../../screens/AppStack/Profile'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default HomeStack
