import { createStackNavigator } from '@react-navigation/stack'

import Notifications from '../../screens/AppStack/Notifications'

const Stack = createStackNavigator()

const NotificationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationsScreen" component={Notifications} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default NotificationsStack
