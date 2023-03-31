import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './src/pages/SignUpScreen';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import ListProduct from './src/pages/ListProduct';

// import {firebaseConfig} from './config';
// import * as firebaseObj from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

const Stack = createNativeStackNavigator();
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

function App() {
  // useEffect(() => {
  // To read Data
  // const myUser = firebaseObj.database().ref('users');
  // myUser.on('value', data => {
  //   console.log(data.val());
  // });

  // To write data
  //   const dept = firebase.database().ref('dept');
  //   dept.set({
  //     deptid: 1,
  //     deptname: 'CS',
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

