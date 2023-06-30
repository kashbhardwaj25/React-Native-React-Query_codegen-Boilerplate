import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'

import useUserStore from '../../store/userStore'
import { resetTokens } from '../../utils/tokenHelper'
import graphqlRequestClient from '../../services/api'
import HomeStack from '../../navigation/stacks/HomeStack'
import { useMeQuery } from '../../services/api/fifoServer'
import DrawerUserInfo from '../../components/DrawerUserInfo'
import ProfileStack from '../../navigation/stacks/ProfileStack'
import SettingsStack from '../../navigation/stacks/SettingsStack'
import NotificationsStack from '../../navigation/stacks/NotificationsStack'

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
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  )
}

export default AppStack
