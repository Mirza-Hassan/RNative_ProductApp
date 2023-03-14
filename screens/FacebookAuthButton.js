import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {colors} from './constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const FacebookAuthButton = props => {
  const navigation = useNavigation();

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw new Error('Something went wrong obtaining access token');
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      await auth().signInWithCredential(facebookCredential);
      navigation.navigate('Products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleFacebookLogin}>
      <View style={styles.btnWidth}>
        <Text style={styles.ButtonContainer}>
          {' '}
          <Icon name="facebook" size={20} color="#009732" />
          {'     '}Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  ButtonContainer: {
    fontWeight: '600',
    fontSize: 15,
    color: '#009732',
  },
  btnWidth: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 220,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#009732',
    borderWidth: 1,
  },
});

export default FacebookAuthButton;
