import { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, View, TextInput, Platform, Dimensions, Image } from 'react-native'

import useAuthStore from '../../../store/userStore'
import { setTokens } from '../../../utils/tokenHelper'
import graphqlRequestClient from '../../../services/api'
import AppText from '../../../components/shared/AppText'
import { RootStackParamList } from '../../../types/navigationTypes'
import { useSignInMutation } from '../../../services/api/fifoServer'
import { BLACK_COLOR, BLUE_COLOR_100, WHITE_COLOR, YELLOW_COLOR_300 } from '../../../styles/colorConstants'

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>

const SignIn = ({ navigation }: SignInProps) => {
  const [phone, setPhone] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const { setIsLoggedIn } = useAuthStore()

  const { mutate, isLoading } = useSignInMutation(graphqlRequestClient(), {
    onSuccess: async (data) => {
      if (data.signin.accessToken) {
        await setTokens({ token: data.signin.accessToken.token })

        setIsLoggedIn(true)
      }
    },
    onError: (error) => console.log(error),
  })

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 275, height: 275, marginBottom: 16 }}
        source={require('../../../assets/authIllustration.webp')}
      />
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your phone number"
        placeholderTextColor={BLACK_COLOR}
        defaultValue={phone}
        onChangeText={(newText) => setPhone(newText)}
      />
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter your password"
        placeholderTextColor={BLACK_COLOR}
        defaultValue={passwordInput}
        onChangeText={(newText) => setPasswordInput(newText)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.btnStyles}
        disabled={isLoading}
        onPress={() => {
          mutate({
            phoneNumber: phone,
            password: passwordInput,
          })
        }}
      >
        <AppText style={{ textAlign: 'center' }}>{isLoading ? 'Loading ...' : 'Sign In'}</AppText>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <AppText style={{ color: WHITE_COLOR, marginTop: 16 }}>New User? Register here!</AppText>
      </Pressable>
    </View>
  )
}

export default SignIn

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR,
  },
  inputStyles: {
    width: windowWidth * 0.8,
    backgroundColor: BLUE_COLOR_100,
    marginBottom: 16,
    borderRadius: 4,
    color: BLACK_COLOR,

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
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
})
