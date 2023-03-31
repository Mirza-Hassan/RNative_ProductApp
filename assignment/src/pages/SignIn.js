import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import {colors} from '../constant';

const SignInScreen = props => {
  const handleEmail = text => {};
  const handlePassword = text => {};
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/user.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handleEmail}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={handlePassword}
      />

      <Button
        style={styles.submitButton}
        title="Login"
        color={colors.primaryColor}
        onPress={() => props.navigation.navigate('ListProduct')}
      />
      <Text style={styles.textMessage}>Don't have an account?</Text>
      <Button
        style={styles.submitButton}
        title="Signup"
        color={colors.primaryColor}
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
  );
};
//=========css
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  image: {
    width: 200,
    height: 150,
    margin: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: colors.primaryColor,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  textMessage: {
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
  },
});
export default SignInScreen;
