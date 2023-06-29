import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../../screens/AppStack/Profile'

const Stack = createStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack
