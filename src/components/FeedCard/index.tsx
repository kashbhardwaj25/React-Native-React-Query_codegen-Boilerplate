import { View, Text } from 'react-native'
import { GetPostsQuery } from '../../services/api/fifoServer'

// import PostHeader from '../PostHeader'
// import FeedCardMenu from '../FeedCardMenu'
// import FeedCardContent from '../FeedCardContent'
// import PostActionButtons from '../PostActionButtons'

interface PostTypes {
  post: GetPostsQuery['getPosts']['posts'][0]
}

const FeedCard = ({ post }: PostTypes) => {
  return (
    <View>
      {/* <View>
        <PostHeader />
        <FeedCardMenu />
      </View>
      <View>
        <FeedCardContent />
      </View>
      <View>
        <PostActionButtons />
      </View> */}
      <Text>{post.content}</Text>
    </View>
  )
}

export default FeedCard
