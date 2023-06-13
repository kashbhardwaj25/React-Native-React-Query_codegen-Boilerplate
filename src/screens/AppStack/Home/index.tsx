import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native'

import useAuthStore from '../../../store/userStore'
import { resetTokens } from '../../../utils/tokenHelper'

const Home = () => {
  const { setIsLoggedIn } = useAuthStore()

  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to the app!</Text>
        <TouchableOpacity
          onPress={async () => {
            await resetTokens()
            setIsLoggedIn(false)
          }}
        >
          <Text style={{ textAlign: 'center' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
