import { View, Text, Image, StyleSheet } from 'react-native'
import AvatarIcon from '../../assets/icons/AvatarIcon'

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
        <Text>{name}</Text>
        <Text>{'@' + username}</Text>
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
