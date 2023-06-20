import { View, Text, StyleSheet } from 'react-native'
import { GetPostsQuery } from '../../services/api/fifoServer'

import PostHeader from '../PostHeader'
import FeedCardMenu from '../FeedCardMenu'
import FeedCardContent from '../FeedCardContent'
import PostActionButtons from '../PostActionButtons'

interface PostTypes {
  post: GetPostsQuery['getPosts']['posts'][0]
}

const FeedCard = ({ post }: PostTypes) => {
  return (
    <View style={styles.container}>
      <View>
        <PostHeader
          name={post.createdBy.name || ''}
          username={post.createdBy.username || ''}
          profileImageUrl={post.createdBy.profileImage?.medium || ''}
        />
        <FeedCardMenu />
      </View>
      <View>
        <FeedCardContent />
      </View>
      <View>
        <PostActionButtons />
      </View>
      <Text>{post.content}</Text>
    </View>
  )
}

export default FeedCard

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },
})
