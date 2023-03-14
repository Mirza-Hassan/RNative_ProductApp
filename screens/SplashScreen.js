import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from './constant';

const SplashScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View style={styles.TopContainer}>
          <Image
            source={require('../assets/images/welcom_img2.png')}
            style={styles.imageContainer}
          />
          <Text style={styles.text2}>Online medicine app </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.ButtonContainer}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 100,
  },
  imageContainer: {
    height: 200,
    width: 275,
  },
  ButtonContainer: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
  text2: {
    color: 'purple',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 40,
    textAlign: 'center',
  },
  startBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    height: 40,
    width: 160,
    backgroundColor: colors.darkPurple,
    borderRadius: 10,
  },
});

export default SplashScreen;
