import { TextProps, Text, StyleSheet } from 'react-native'

const AppText = (props: TextProps) => {
  return (
    <Text {...props} style={[{ ...styles.text }, props.style]}>
      {props.children}
    </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
})
