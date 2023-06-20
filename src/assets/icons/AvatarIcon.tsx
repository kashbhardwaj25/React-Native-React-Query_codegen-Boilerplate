import * as React from 'react'
import Svg, { Mask, Rect, G, Path } from 'react-native-svg'

const AvatarIcon = (props: any) => (
  <Svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <Mask id=":rv:" maskUnits="userSpaceOnUse" x={0} y={0} width={36} height={36}>
      <Rect width={36} height={36} rx={72} fill="#FFFFFF" />
    </Mask>
    <G mask="url(#:rv:)">
      <Rect width={36} height={36} fill="#a69a90" />
      <Rect
        x={0}
        y={0}
        width={36}
        height={36}
        transform="translate(-3 7) rotate(227 18 18) scale(1.2)"
        fill="#fff1c1"
        rx={36}
      />
      <G transform="translate(-3 3.5) rotate(7 18 18)">
        <Path d="M13,21 a1,0.75 0 0,0 10,0" fill="#000000" />
        <Rect x={12} y={14} width={1.5} height={2} rx={1} stroke="none" fill="#000000" />
        <Rect x={22} y={14} width={1.5} height={2} rx={1} stroke="none" fill="#000000" />
      </G>
    </G>
  </Svg>
)
export default AvatarIcon
