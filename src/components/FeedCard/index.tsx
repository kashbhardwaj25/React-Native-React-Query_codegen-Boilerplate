import { View, StyleSheet } from 'react-native'
import { GetPostsQuery } from '../../services/api/fifoServer'

import PostHeader from '../PostHeader'
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
          name={(post.originalPost ? post.originalPost.createdBy.name : post.createdBy.name) || ''}
          username={(post.originalPost ? post.originalPost.createdBy.username : post.createdBy.username) || ''}
          profileImageUrl={
            (post.originalPost
              ? post.originalPost.createdBy.profileImage?.medium
              : post.createdBy.profileImage?.medium) || ''
          }
        />
        <FeedCardMenu />
      </View>
      <View>
        <FeedCardContent content={(post.originalPost ? post.originalPost.content : post.content) || ''} />
      </View>
      <View>
        <PostActionButtons
          likeCount={post.originalPost ? post.originalPost.likeCount : post.likeCount}
          repostCount={post.originalPost ? post.originalPost.repostCount : post.repostCount}
          commentCount={post.originalPost ? post.originalPost.commentCount : post.commentCount}
        />
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
