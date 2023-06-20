import { View, Text, Image } from 'react-native'

interface PostHeaderProps {
  name: string
  username: string
  profileImageUrl: string
}

const PostHeader = ({ name, username, profileImageUrl }: PostHeaderProps) => {
  return (
    <View>
      {profileImageUrl !== '' ? (
        <Image style={{ width: 40, height: 40, borderRadius: 9999 }} source={{ uri: profileImageUrl }} />
      ) : null}

      <View>
        <Text>{name}</Text>
        <Text>{'@' + username}</Text>
      </View>
    </View>
  )
}

export default PostHeader
