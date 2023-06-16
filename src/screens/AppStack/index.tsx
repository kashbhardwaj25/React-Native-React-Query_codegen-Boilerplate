// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Home'
import useUserStore from '../../store/userStore'
import graphqlRequestClient from '../../services/api'
import { useMeQuery } from '../../services/api/fifoServer'
import { getErrorMessageAndCode } from '../../utils/helpers'
// import { RootStackParamList } from '../../types/navigationTypes'

// const Stack = createNativeStackNavigator<RootStackParamList>()

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Profile'
import Notifications from './Notifications'
import Account from './Account'

const Tab = createBottomTabNavigator()

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
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default AppStack
