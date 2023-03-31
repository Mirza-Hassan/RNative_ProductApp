import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from '../constant';

const SplashScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: 30,
            marginTop: 100,
          }}>
          <Image
            source={require('../../assets/images/welcom_img2.png')}
            style={{height: 200, width: 275}}
          />
          <Text style={styles.text2}>Online medicine app </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={{
              color: colors.white,
              fontWeight: '600',
              fontSize: 20,
            }}>
            Let's Start
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  consultTxt: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: '900',
    alignSelf: 'center',
    margin: 10,
  },
  text2: {
    color: colors.primaryColor,
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
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
  },
});

export default SplashScreen;
