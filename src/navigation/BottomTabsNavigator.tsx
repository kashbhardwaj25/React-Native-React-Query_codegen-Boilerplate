import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './stacks/HomeStack'
import HomeIcon from '../assets/icons/Home'
import Settings from '../assets/icons/Settings'
import ProfileStack from './stacks/ProfileStack'
import SettingsStack from './stacks/SettingsStack'
import AccountIcon from '../assets/icons/AccountIcon'
import NotificationsStack from './stacks/NotificationsStack'
import NotificationsIcon from '../assets/icons/Notifications'
import { BLACK_COLOR, GRAY_COLOR_100 } from '../styles/colorConstants'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
        },
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Notifications" component={NotificationsStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Settings" component={SettingsStack} /> */}
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
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
        name="ProfileTab"
        component={ProfileStack}
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
        name="NotificationsTab"
        component={NotificationsStack}
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
        name="SettingsTab"
        component={SettingsStack}
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

export default BottomTabNavigator
