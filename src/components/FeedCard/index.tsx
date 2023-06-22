import { View, StyleSheet } from 'react-native'
import { GetPostsQuery } from '../../services/api/fifoServer'

import PostHeader from '../PostHeader'
import AppText from '../shared/AppText'
import FeedCardMenu from '../FeedCardMenu'
import FeedCardContent from '../FeedCardContent'
import PostActionButtons from '../PostActionButtons'
import { GRAY_COLOR_200 } from '../../styles/colorConstants'

interface PostTypes {
  post: GetPostsQuery['getPosts']['posts'][0]
}

const FeedCard = ({ post }: PostTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeaderAndMenu}>
        <PostHeader
          name={post.createdBy.name || ''}
          username={post.createdBy.username || ''}
          profileImageUrl={post.createdBy.profileImage?.medium || ''}
        />
        <FeedCardMenu />
      </View>
      <View>
        <FeedCardContent content={post.content || ''} />
      </View>
      <View>
        <PostActionButtons />
      </View>
    </View>
  )
}

export default FeedCard

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY_COLOR_200,
  },
  postHeaderAndMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
