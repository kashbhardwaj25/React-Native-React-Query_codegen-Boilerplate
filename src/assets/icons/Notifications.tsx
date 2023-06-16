import Svg, { Path } from 'react-native-svg'

function Notifications(props: any) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={48} viewBox="0 -960 960 960" width={48} {...props}>
      <Path d="M160-200v-60h84v-306q0-84 49.5-149.5T424-798v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717-566v306h83v60H160zm320-295zm0 415q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80zM304-260h353v-306q0-74-51-126t-125-52q-74 0-125.5 52T304-566v306z" />
    </Svg>
  )
}

export default Notifications
