import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

GoogleSignin.configure({
  webClientId:
    '305975247522-p31up1p0v0jovb46rhetmv0vkm0hrd3q.apps.googleusercontent.com',
});

export function GoogleSignInScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigation();

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      console.log('credential', credential);
      await auth().signInWithCredential(credential);
      console.log('User sign-in successfully');
      navigation.navigate('Products');
      setLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Error occurred while signing in:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* {loggedIn ? (
        <Button title="Sign Out" onPress={() => auth().signOut()} />
      ) : ( */}
      <>
        <TouchableOpacity
          style={styles.btnWidth}
          activeOpacity={0.8}
          onPress={onGoogleButtonPress}>
          <Text style={styles.ButtonContainer}>
            <Icon name="google" size={20} color="#009732" />
            {'     '}Google
          </Text>
        </TouchableOpacity>
      </>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnWidth: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#009732',
    borderWidth: 1,
  },
  ButtonContainer: {
    color: '#009732',
    fontWeight: '600',
    fontSize: 20,
    borderColor: '#009732',
  },
  iconContainer: {
    fontSize: 12,
  },
});

export default GoogleSignInScreen;
