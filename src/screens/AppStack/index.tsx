import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Profile from './Profile'
import Account from './Account'
import Notifications from './Notifications'
import HomeIcon from '../../assets/icons/Home'
import Settings from '../../assets/icons/Settings'
import AccountIcon from '../../assets/icons/AccountIcon'
import NotificationsIcon from '../../assets/icons/Notifications'
import { BLACK_COLOR, GRAY_COLOR_100 } from '../../styles/colorConstants'

const Tab = createBottomTabNavigator()

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIcon width={24} height={24} />,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: GRAY_COLOR_100,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            color: BLACK_COLOR,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <AccountIcon width={24} height={24} />,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: GRAY_COLOR_100,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            color: BLACK_COLOR,
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: () => <NotificationsIcon width={24} height={24} />,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: GRAY_COLOR_100,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            color: BLACK_COLOR,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Settings width={24} height={24} />,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: GRAY_COLOR_100,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            color: BLACK_COLOR,
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default AppStack
