import { View, Image, StyleSheet } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo64.png')} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
