import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {auth} from '../config';
import {signOut} from 'firebase/auth';

export function CartIcon({navigation}) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate('SignIn');
        console.log('Signed out successfully');
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <View style={styles.container}>
      {/* <Icon name="rocket" size={20} color="#900" /> */}
      <Text
        style={styles.text}
        onPress={() => {
          handleLogout();
        }}>
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#C49CF7',
    padding: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
