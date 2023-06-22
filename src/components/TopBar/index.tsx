import { View, StyleSheet, Image } from 'react-native'

import AvatarIcon from '../../assets/icons/AvatarIcon'
import { MeQuery } from '../../services/api/fifoServer'
import { GRAY_COLOR_200, WHITE_COLOR } from '../../styles/colorConstants'

const TopBar = ({ currentUserDetails }: { currentUserDetails: MeQuery }) => {
  const profileImageUrl = currentUserDetails.me.profileImage?.medium || ''

  return (
    <View style={styles.topBarStyles}>
      {profileImageUrl !== '' ? (
        <Image style={styles.avatarStyles} source={{ uri: profileImageUrl }} />
      ) : (
        <AvatarIcon width={36} height={36} />
      )}

      <Image
        style={[
          styles.logoStyles,
          {
            transform: [{ translateX: -20 }],
          },
        ]}
        source={require('../../assets/logo64.png')}
      />
      <View />
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  topBarStyles: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    backgroundColor: WHITE_COLOR,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY_COLOR_200,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoStyles: {
    height: 40,
    width: 40,
  },
  avatarStyles: {
    width: 36,
    height: 36,
    borderRadius: 9999,
  },
})
