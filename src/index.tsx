import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import AuthStack from './screens/AuthStack';
import AppStack from './screens/AppStack';
import {useEffect, useState} from 'react';
import {getTokens} from './utils/tokenHelper';

const App = () => {
  const queryClient = new QueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getTokens().then(data => {
      if (data.accessToken) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
