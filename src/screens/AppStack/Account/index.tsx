import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

import useAuthStore from '../../../store/userStore'
import { resetTokens } from '../../../utils/tokenHelper'

const Account = () => {
  const { setIsLoggedIn } = useAuthStore()

  return (
    <SafeAreaView>
      <Text>Account Activity</Text>
      <TouchableOpacity
        onPress={async () => {
          await resetTokens()
          setIsLoggedIn(false)
        }}
      >
        <Text style={{ textAlign: 'center' }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Account
