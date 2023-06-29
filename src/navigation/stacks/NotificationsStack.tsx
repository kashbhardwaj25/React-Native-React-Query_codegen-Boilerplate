import { createStackNavigator } from '@react-navigation/stack'

import Notifications from '../../screens/AppStack/Notifications'

const Stack = createStackNavigator()

const NotificationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  )
}

export default NotificationsStack
