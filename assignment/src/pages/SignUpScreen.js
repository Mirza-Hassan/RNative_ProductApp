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

export default class SignUpScreen extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  handleUsername = text => {
    this.setState({username: text});
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  handleConfirmPassword = text => {
    this.setState({confirmpassword: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text2}>Sign UP</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="UserName"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleUsername}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Confirm Password"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <Button
          style={styles.submitButton}
          title="Signup"
          color={colors.primaryColor}
        />
      </View>
    );
  }
}

//=========css
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
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
    padding: 10,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
  },
  text2: {
    color: colors.primaryColor,
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center',
  },
});
