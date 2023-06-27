import 'react-native-gesture-handler'

import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppStack from './screens/AppStack'
import AuthStack from './screens/AuthStack'
import useUserStore from './store/userStore'
import { getTokens } from './utils/tokenHelper'
import SplashScreen from './components/SplashScreen'

const App = () => {
  const queryClient = new QueryClient()
  const { isLoggedIn, setIsLoggedIn } = useUserStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTokens().then((data) => {
      if (data.accessToken) {
        setIsLoggedIn(true)
      }

      setLoading(false)
    })
  }, [])

  if (loading) return <SplashScreen />

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>{isLoggedIn ? <AppStack /> : <AuthStack />}</QueryClientProvider>
    </NavigationContainer>
  )
}

export default App
