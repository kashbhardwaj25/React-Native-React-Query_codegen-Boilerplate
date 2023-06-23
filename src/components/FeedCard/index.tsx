import { View, StyleSheet } from 'react-native'
import { GetPostsQuery, PostType } from '../../services/api/fifoServer'

import PostHeader from '../PostHeader'
import AppText from '../shared/AppText'
import FeedCardMenu from '../FeedCardMenu'
import FeedCardContent from '../FeedCardContent'
import PostActionButtons from '../PostActionButtons'
import { BLUE_COLOR_600, GRAY_COLOR_200 } from '../../styles/colorConstants'
import Repost from '../../assets/icons/Repost'

interface PostTypes {
  post: GetPostsQuery['getPosts']['posts'][0]
}

const FeedCard = ({ post }: PostTypes) => {
  return (
    <View style={styles.container}>
      {post.originalPost && post.postType === PostType.Repost ? (
        <View style={styles.repostText}>
          <Repost fill={BLUE_COLOR_600} width={20} height={20} />
          <AppText style={{ marginLeft: 8 }}>{post.createdBy.name + ' reposted'}</AppText>
        </View>
      ) : null}
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
  repostText: {
    marginBottom: 8,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
  },
})
