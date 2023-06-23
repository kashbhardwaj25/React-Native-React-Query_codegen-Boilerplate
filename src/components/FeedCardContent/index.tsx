import { View, StyleSheet } from 'react-native'

import AppText from '../shared/AppText'

const FeedCardContent = ({ content, media }: { content: string; media: string }) => {
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
