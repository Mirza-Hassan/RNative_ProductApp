import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from './constant';

import {auth} from '../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import GoogleSignInScreen from './GoogleSignInScreen';
import FacebookAuthButton from './FacebookAuthButton';

const SignUpScreen = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleUsername = text => {
    setUsername({username: text});
  };
  const handleEmail = text => {
    setEmail(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };
  const handleConfirmPassword = text => {
    setConfirmPassword({confirmpassword: text});
  };

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        alert('successfully signup');
        props.navigation.navigate('SignIn');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Sign up</Text>
      <Text style={styles.text3}>Full Name</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Fullname"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handleUsername}
      />
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
      <Text style={styles.text3}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Confirm Password"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handleConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.btnWidth}
        activeOpacity={0.8}
        onPress={() => createUser(email, password)}>
        <Text style={styles.ButtonContainer}>Sign up</Text>
      </TouchableOpacity>
      <View>
        <GoogleSignInScreen />
        <FacebookAuthButton />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('SignIn')}>
        <Text style={styles.textMessage}>Already have an account?</Text>
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
    margin: 10,
    height: 40,
    borderColor: colors.darkPurple,
    borderWidth: 1,
  },
  textMessage: {
    color: 'purple',
    fontSize: 15,
    padding: 10,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
  },
  text2: {
    color: 'purple',
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
  },
  text3: {
    color: 'black',
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 15,
  },
  session: {
    marginTop: 2,
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
  ButtonContainer: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
});

export default SignUpScreen;
