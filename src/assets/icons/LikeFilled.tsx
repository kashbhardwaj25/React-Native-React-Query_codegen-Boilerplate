import Svg, { Path } from 'react-native-svg'

function LikeFilled(props: any) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.827A6.137 6.137 0 0116.382 3a5.238 5.238 0 013.708 1.689 5.333 5.333 0 011.405 3.852c0 3.292-2.688 8.509-8.59 12.203a1.73 1.73 0 01-1.81 0c-5.902-3.694-8.59-8.911-8.59-12.203A5.333 5.333 0 013.91 4.69 5.238 5.238 0 017.618 3 6.137 6.137 0 0112 4.827z"
        fill="#E53935"
      />
    </Svg>
  )
}

export default LikeFilled
