import AsyncStorage from '@react-native-async-storage/async-storage';

const FIFO_ACCESS_TOKEN = 'fifo-access-token';

export const setTokens = async ({token}: {token: string}) => {
  await AsyncStorage.setItem(FIFO_ACCESS_TOKEN, token);
};

export const getTokens = async () => {
  const accessToken = await AsyncStorage.getItem(FIFO_ACCESS_TOKEN);

  return {accessToken};
};

export const resetTokens = async () => {
  await AsyncStorage.removeItem(FIFO_ACCESS_TOKEN);
};
