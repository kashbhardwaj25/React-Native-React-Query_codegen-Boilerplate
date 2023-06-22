import { View, StyleSheet } from 'react-native'

import Like from '../../assets/icons/Like'
import Repost from '../../assets/icons/Repost'
import Comment from '../../assets/icons/Comment'
import AppText from '../shared/AppText'

const PostActionButtons = ({
  likeCount,
  repostCount,
  commentCount,
}: {
  likeCount: number
  repostCount: number
  commentCount: number
}) => {
  return (
    <View style={styles.postActionsWrapper}>
      <View style={styles.iconWrapper}>
        <Like />
        <AppText style={{ marginLeft: 8 }}>{likeCount}</AppText>
      </View>
      <View style={styles.iconWrapper}>
        <Repost />
        <AppText style={{ marginLeft: 8 }}>{repostCount}</AppText>
      </View>
      <View style={styles.iconWrapper}>
        <Comment />
        <AppText style={{ marginLeft: 8 }}>{commentCount}</AppText>
      </View>
    </View>
  )
}

export default PostActionButtons

const styles = StyleSheet.create({
  postActionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'flex-end',
  },
  iconWrapper: {
    minWidth: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
