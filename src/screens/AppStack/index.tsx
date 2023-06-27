import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Home'
import Profile from './Profile'
import Account from './Account'
import Notifications from './Notifications'

const Drawer = createDrawerNavigator()

const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  )
}

export default AppStack
