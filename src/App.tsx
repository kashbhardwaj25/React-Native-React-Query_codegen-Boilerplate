import {Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}: any) => {
  return (
    <Button
      title="Go to Aakash's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Aakash'})}
    />
  );
};
const ProfileScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
