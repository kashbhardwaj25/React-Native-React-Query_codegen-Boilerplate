import {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Pressable,
  Text,
  View,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../types/navigationTypes';
import {
  INDIGO_COLOR_800,
  INDIGO_COLOR_950,
  WHITE_COLOR,
  YELLOW_COLOR_300,
} from '../../../styles/colorConstants';
import graphqlRequestClient from '../../../services/api';
import {useSignInMutation} from '../../../services/api/companyPortalServer';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInProps) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const {mutate, isLoading} = useSignInMutation(graphqlRequestClient(), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => console.log(error),
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your email"
        placeholderTextColor={WHITE_COLOR}
        defaultValue={emailInput}
        onChangeText={newText => setEmailInput(newText)}
      />
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your password"
        placeholderTextColor={WHITE_COLOR}
        defaultValue={passwordInput}
        onChangeText={newText => setPasswordInput(newText)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.btnStyles}
        disabled={isLoading}
        onPress={() => {
          mutate({
            email: emailInput,
            password: passwordInput,
          });
        }}>
        <Text style={{textAlign: 'center'}}>
          {isLoading ? 'Loading ...' : 'Sign In'}
        </Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: WHITE_COLOR, marginTop: 16}}>
          New User? Register here!
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: INDIGO_COLOR_950,
  },
  inputStyles: {
    width: windowWidth * 0.8,
    backgroundColor: INDIGO_COLOR_800,
    marginBottom: 16,
    borderRadius: 4,
    color: WHITE_COLOR,

    ...Platform.select({
      ios: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 4,
        paddingRight: 4,
      },
      android: {
        paddingLeft: 8,
        paddingRight: 8,
      },
    }),
  },
  btnStyles: {
    backgroundColor: YELLOW_COLOR_300,
    width: windowWidth * 0.8,
    borderRadius: 4,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
