import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Home'
import Profile from './Profile'
import Account from './Account'
import Notifications from './Notifications'
import useUserStore from '../../store/userStore'
import { resetTokens } from '../../utils/tokenHelper'
import graphqlRequestClient from '../../services/api'
import { useMeQuery } from '../../services/api/fifoServer'
import DrawerUserInfo from '../../components/DrawerUserInfo'

const Drawer = createDrawerNavigator()

const AppStack = () => {
  const { setIsLoggedIn } = useUserStore()
  const { data: currentUserDetails } = useMeQuery(graphqlRequestClient(), undefined, {
    enabled: false,
  })

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            {currentUserDetails ? <DrawerUserInfo currentUserDetails={currentUserDetails} /> : null}
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={async () => {
                await resetTokens()
                setIsLoggedIn(false)
              }}
            />
          </DrawerContentScrollView>
        )
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  )
}

export default AppStack
