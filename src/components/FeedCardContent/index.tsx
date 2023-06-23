import { View, StyleSheet, Image } from 'react-native'

import AppText from '../shared/AppText'

const FeedCardContent = ({ content, media }: { content: string; media?: string }) => {
  return (
    <View style={styles.postTextWrapper}>
      <AppText>{content}</AppText>
      {media !== '' ? <Image style={styles.postImage} source={{ uri: media }} /> : null}
    </View>
  )
}

export default FeedCardContent

const styles = StyleSheet.create({
  postTextWrapper: {
    marginTop: 12,
  },
  postImage: {
    height: 120,
    borderRadius: 8,
  },
})
