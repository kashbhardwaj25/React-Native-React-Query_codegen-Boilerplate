import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import AuthStack from './screens/AuthStack';
import AppStack from './screens/AppStack';
import useUserStore from './store/userStore';
import {useEffect, useState} from 'react';
import {getTokens} from './utils/tokenHelper';

const App = () => {
  const queryClient = new QueryClient();
  const {isLoggedIn, setIsLoggedIn} = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTokens().then(data => {
      if (data.accessToken) {
        setIsLoggedIn(true);
      }

      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
