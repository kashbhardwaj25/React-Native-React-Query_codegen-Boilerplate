import {useState} from 'react';
import {
  Pressable,
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {RootStackParamList} from '../../../types/navigationTypes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  INDIGO_COLOR_950,
  INDIGO_COLOR_800,
  WHITE_COLOR,
  YELLOW_COLOR_300,
} from '../../../styles/colorConstants';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: SignUpProps) => {
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [uniqueName, setUniqueName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your name"
        placeholderTextColor={WHITE_COLOR}
        defaultValue={name}
        onChangeText={newText => setName(newText)}
      />
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
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your workspace name"
        placeholderTextColor={WHITE_COLOR}
        defaultValue={workspaceName}
        onChangeText={newText => setWorkspaceName(newText)}
      />
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your Unique Name"
        placeholderTextColor={WHITE_COLOR}
        defaultValue={uniqueName}
        onChangeText={newText => setUniqueName(newText)}
      />
      <Pressable
        style={styles.btnStyles}
        onPress={() => {
          console.log('Hello');
        }}>
        <Text style={{textAlign: 'center'}}>Send Verification Email</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text style={{color: WHITE_COLOR, marginTop: 16}}>
          Already have an account? Login here!
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

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
