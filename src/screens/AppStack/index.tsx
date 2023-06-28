import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Home'
import Profile from './Profile'
import Account from './Account'
import Notifications from './Notifications'
import useUserStore from '../../store/userStore'
import { resetTokens } from '../../utils/tokenHelper'
import DrawerUserInfo from '../../components/DrawerUserInfo'
import { useMeQueryData } from '../../hooks/getQueryDataHooks'

const Drawer = createDrawerNavigator()

const AppStack = () => {
  const { setIsLoggedIn } = useUserStore()
  const { currentUserDetails } = useMeQueryData()

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            {currentUserDetails ? <DrawerUserInfo /> : null}
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
