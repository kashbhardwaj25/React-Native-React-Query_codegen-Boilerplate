import { View, StyleSheet, Image } from 'react-native'

// import AvatarIcon from '../../assets/icons/AvatarIcon'
import { WHITE_COLOR } from '../../styles/colorConstants'
// import { useMeQueryData } from '../../hooks/getQueryDataHooks'

const TopBar = () => {
  // const { currentUserDetails } = useMeQueryData()

  // const profileImageUrl = currentUserDetails.me.profileImage?.medium || ''

  return (
    <View style={styles.topBarStyles}>
      {/* {profileImageUrl !== '' ? (
        <Image style={styles.avatarStyles} source={{ uri: profileImageUrl }} />
      ) : (
        <AvatarIcon />
      )} */}

      <Image style={styles.logoStyles} source={require('../../assets/logo64.png')} />
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  topBarStyles: {
    display: 'flex',
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  logoStyles: {
    height: 40,
    width: 40,
  },
  avatarStyles: {},
})
