import {Text, TouchableOpacity, View} from 'react-native';
import {resetTokens} from '../../../utils/tokenHelper';
import useAuthStore from '../../../store/userStore';

const Home = () => {
  const {setIsLoggedIn} = useAuthStore();

  return (
    <View>
      <Text>Welcome to the app!</Text>
      <TouchableOpacity
        onPress={async () => {
          await resetTokens();
          setIsLoggedIn(false);
        }}>
        <Text style={{textAlign: 'center'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
