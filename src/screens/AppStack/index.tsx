// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import useUserStore from '../../store/userStore'
import graphqlRequestClient from '../../services/api'
import { useMeQuery } from '../../services/api/fifoServer'
import { getErrorMessageAndCode } from '../../utils/helpers'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from './Home'
import Profile from './Profile'
import Account from './Account'
import Notifications from './Notifications'
import HomeIcon from '../../assets/icons/Home'
import Settings from '../../assets/icons/Settings'
import AccountIcon from '../../assets/icons/AccountIcon'
import NotificationsIcon from '../../assets/icons/Notifications'

const Tab = createMaterialBottomTabNavigator()

const AppStack = () => {
  const { setIsLoggedIn } = useUserStore()

  useMeQuery(graphqlRequestClient(), undefined, {
    onError(error) {
      const { code } = getErrorMessageAndCode(error)

      if (code === 'UNAUTHENTICATED') {
        setIsLoggedIn(false)
      }
    },
  })

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <AccountIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: () => <NotificationsIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Settings width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default AppStack
