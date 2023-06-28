import { Image, StyleSheet, View } from 'react-native'

import AppText from '../shared/AppText'
import AvatarIcon from '../../assets/icons/AvatarIcon'
import { useMeQueryData } from '../../hooks/getQueryDataHooks'

const DrawerUserInfo = () => {
  const { currentUserDetails } = useMeQueryData()

  const name = currentUserDetails.me.name
  const username = currentUserDetails.me.username
  const profileImage = currentUserDetails.me.profileImage?.original

  return (
    <View style={styles.drawerUserInfoWrapper}>
      {profileImage ? <Image style={styles.profileImageAvatar} source={{ uri: profileImage }} /> : <AvatarIcon />}
      <AppText style={styles.nameWrapper}>{name}</AppText>
      <AppText style={styles.usernameWrapper}>{'@' + username}</AppText>
    </View>
  )
}

export default DrawerUserInfo

const styles = StyleSheet.create({
  drawerUserInfoWrapper: {
    padding: 10,
  },
  profileImageAvatar: {
    height: 60,
    width: 60,
    borderRadius: 9999,
  },
  nameWrapper: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  usernameWrapper: {
    marginTop: 2,
  },
})
