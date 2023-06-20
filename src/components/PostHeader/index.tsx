import { View, Text } from 'react-native'

interface PostHeaderProps {
  name: string
  username: string
  profileImageUrl: string
}

const PostHeader = ({ name, username, profileImageUrl }: PostHeaderProps) => {
  return (
    <View>
      <Text>Post Header Component!</Text>
    </View>
  )
}

export default PostHeader
