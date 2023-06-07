import AsyncStorage from '@react-native-async-storage/async-storage';

const PORTAL_ACCESS_TOKEN = 'portal-access-token';

export const setTokens = async ({token}: {token: string}) => {
  await AsyncStorage.setItem(PORTAL_ACCESS_TOKEN, token);
};

export const getTokens = async () => {
  const accessToken = await AsyncStorage.getItem(PORTAL_ACCESS_TOKEN);

  return {accessToken};
};

export const resetTokens = async () => {
  await AsyncStorage.removeItem(PORTAL_ACCESS_TOKEN);
};
