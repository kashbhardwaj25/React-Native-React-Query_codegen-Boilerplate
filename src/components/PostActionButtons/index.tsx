import { View, StyleSheet } from 'react-native'

import Like from '../../assets/icons/Like'
import Repost from '../../assets/icons/Repost'
import Comment from '../../assets/icons/Comment'

const PostActionButtons = () => {
  return (
    <View style={styles.postActionsWrapper}>
      <View style={styles.iconWrapper}>
        <Like />
      </View>
      <View style={styles.iconWrapper}>
        <Repost />
      </View>
      <View style={styles.iconWrapper}>
        <Comment />
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
  },
})
