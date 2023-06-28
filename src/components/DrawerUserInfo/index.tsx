import { Image, StyleSheet, View } from 'react-native'

import AppText from '../shared/AppText'
import AvatarIcon from '../../assets/icons/AvatarIcon'
import { MeQuery } from '../../services/api/fifoServer'
import { GRAY_COLOR_200 } from '../../styles/colorConstants'

const DrawerUserInfo = ({ currentUserDetails }: { currentUserDetails: MeQuery }) => {
  const name = currentUserDetails?.me.name
  const username = currentUserDetails?.me.username
  const followersCount = currentUserDetails?.me.followersCount
  const followingCount = currentUserDetails?.me.followingCount
  const profileImage = currentUserDetails?.me.profileImage?.original

  return (
    <View style={styles.drawerUserInfoWrapper}>
      {profileImage ? <Image style={styles.profileImageAvatar} source={{ uri: profileImage }} /> : <AvatarIcon />}
      <AppText style={styles.nameWrapper}>{name}</AppText>
      <AppText style={styles.usernameWrapper}>{'@' + username}</AppText>

      <View style={styles.userStatsWrapper}>
        <AppText style={styles.usernameWrapper}>{followingCount + ' Following'}</AppText>
        <AppText style={styles.usernameWrapper}>{followersCount + ' Followers'}</AppText>
      </View>

      <View style={styles.divider} />
    </View>
  )
}

export default DrawerUserInfo

const styles = StyleSheet.create({
  drawerUserInfoWrapper: {
    padding: 10,
  },
  divider: {
    height: 0.5,
    marginLeft: 10,
    marginTop: 24,
    backgroundColor: GRAY_COLOR_200,
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
  userStatsWrapper: {
    marginTop: 16,
  },
})
