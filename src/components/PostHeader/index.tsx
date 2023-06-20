import { View, Text, Image } from 'react-native'
import AvatarIcon from '../../assets/icons/AvatarIcon'

interface PostHeaderProps {
  name: string
  username: string
  profileImageUrl: string
}

const PostHeader = ({ name, username, profileImageUrl }: PostHeaderProps) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      {profileImageUrl !== '' ? (
        <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: profileImageUrl }} />
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
