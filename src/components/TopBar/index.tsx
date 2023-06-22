import { View } from 'react-native'

import AppText from '../shared/AppText'
import { WHITE_COLOR } from '../../styles/colorConstants'

const TopBar = () => {
  return (
    <View style={{ backgroundColor: WHITE_COLOR }}>
      <AppText>FIFO!</AppText>
    </View>
  )
}

export default TopBar
