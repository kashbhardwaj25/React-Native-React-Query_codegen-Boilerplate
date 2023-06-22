import { SafeAreaView, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'

import useAuthStore from '../../../store/userStore'
import { resetTokens } from '../../../utils/tokenHelper'
import AppText from '../../../components/shared/AppText'
import { YELLOW_COLOR_300 } from '../../../styles/colorConstants'

const Account = () => {
  const { setIsLoggedIn } = useAuthStore()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnStyles}
          onPress={async () => {
            await resetTokens()
            setIsLoggedIn(false)
          }}
        >
          <AppText style={{ textAlign: 'center' }}>Sign Out</AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Account

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyles: {
    backgroundColor: YELLOW_COLOR_300,
    width: windowWidth * 0.8,
    borderRadius: 4,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
})
