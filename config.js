// const firebaseConfig = {
//   apiKey: 'AIzaSyCo4pN7R2HmrpofqZlxus7ocP4aGATIm1g',
//   authDomain: 'reactnativefirebase-a3798.firebaseapp.com',
//   projectId: 'reactnativefirebase-a3798',
//   storageBucket: 'reactnativefirebase-a3798.appspot.com',
//   messagingSenderId: '305975247522',
//   appId: '1:305975247522:web:db57bcedbc3cd0bf108dfb',
//   measurementId: 'G-8B67J71QTW',
// };

import {initializeApp} from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyCo4pN7R2HmrpofqZlxus7ocP4aGATIm1g',
  authDomain: 'reactnativefirebase-a3798.firebaseapp.com',
  projectId: 'reactnativefirebase-a3798',
  storageBucket: 'reactnativefirebase-a3798.appspot.com',
  messagingSenderId: '305975247522',
  appId: '1:305975247522:web:db57bcedbc3cd0bf108dfb',
  measurementId: 'G-8B67J71QTW',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {auth};
