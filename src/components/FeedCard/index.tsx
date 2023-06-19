import { View } from 'react-native'
import PostHeader from '../PostHeader'
import FeedCardMenu from '../FeedCardMenu'
import PostActionButtons from '../PostActionButtons'

const FeedCard = () => {
  return (
    <View>
      <View>
        <PostHeader />
        <FeedCardMenu />
      </View>
      <View>{/* Content */}</View>
      <View>
        <PostActionButtons />
      </View>
    </View>
  )
}

export default FeedCard
