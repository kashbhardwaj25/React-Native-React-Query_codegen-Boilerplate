import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../../screens/AppStack/Profile'

const Stack = createStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ProfileStack
