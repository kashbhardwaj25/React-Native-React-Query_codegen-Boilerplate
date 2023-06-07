import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import AuthStack from './screens/AuthStack';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
