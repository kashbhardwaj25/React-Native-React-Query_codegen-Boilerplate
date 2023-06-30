import { createStackNavigator } from '@react-navigation/stack'

import Account from '../../screens/AppStack/Account'

const Stack = createStackNavigator()

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={Account} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default SettingsStack
