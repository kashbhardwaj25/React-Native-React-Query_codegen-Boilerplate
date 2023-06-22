import { View, StyleSheet } from 'react-native'

import AppText from '../shared/AppText'

const FeedCardContent = ({ content }: { content: string }) => {
  return (
    <View style={styles.postTextWrapper}>
      <AppText>{content}</AppText>
    </View>
  )
}

export default FeedCardContent

const styles = StyleSheet.create({
  postTextWrapper: {
    marginTop: 12,
  },
})
