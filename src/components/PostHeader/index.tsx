import { View, Image, StyleSheet } from 'react-native'

import AppText from '../shared/AppText'
import AvatarIcon from '../../assets/icons/AvatarIcon'
import { BLUE_COLOR_600 } from '../../styles/colorConstants'

interface PostHeaderProps {
  name: string
  username: string
  profileImageUrl: string
}

const PostHeader = ({ name, username, profileImageUrl }: PostHeaderProps) => {
  return (
    <View style={styles.container}>
      {profileImageUrl !== '' ? (
        <Image style={styles.avatarStyles} source={{ uri: profileImageUrl }} />
      ) : (
        <AvatarIcon />
      )}

      <View>
        <AppText style={{ fontWeight: 'bold' }}>{name}</AppText>
        <AppText style={{ color: BLUE_COLOR_600 }}>{'@' + username}</AppText>
      </View>
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarStyles: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
})
