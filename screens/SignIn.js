import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors} from './constant';
import {auth} from '../config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import GoogleSignInScreen from './GoogleSignInScreen';
import FacebookAuthButton from './FacebookAuthButton';

const SignInScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = text => {
    setEmail(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        alert('successfully login');
        props.navigation.navigate('Products');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Sign in</Text>
      <Text style={styles.text3}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Username"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handleEmail}
      />
      <Text style={styles.text3}>Password</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handlePassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.btnWidth}
        activeOpacity={0.8}
        onPress={() => login(email, password)}>
        <Text style={styles.ButtonContainer}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.session}>
        <GoogleSignInScreen props={props} />
        <FacebookAuthButton />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('SignUp')}>
        <Text style={styles.textMessage}>Don't you have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};
//=========css
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: colors.darkPurple,
    borderWidth: 1,
  },
  ButtonContainer: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
  textMessage: {
    color: 'purple',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
  },
  text2: {
    color: 'purple',
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center',
  },
  text3: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
    marginLeft: 15,
  },
  session: {
    marginTop: 10,
  },
  btnWidth: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 340,
    backgroundColor: colors.darkPurple,
    borderRadius: 10,
  },
});
export default SignInScreen;
