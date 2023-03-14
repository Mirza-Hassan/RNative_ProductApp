import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsList} from './screens/ProductsList.js';
import {ProductDetails} from './screens/ProductDetails.js';
import {GoogleSignInScreen} from './screens/GoogleSignInScreen.js';
import {Cart} from './screens/Cart.js';
import {CartProvider} from './contextAPI/CartContext.js';
import {CartIcon} from './screens/CartIcon.js';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import SignIn from './screens/SignIn';

const Stack = createNativeStackNavigator();

function App() {
  const stackoptions = () => ({
    headerShown: false,
  });

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            options={stackoptions}
            component={SplashScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={stackoptions}
            component={SignUpScreen}
          />
          <Stack.Screen
            name="SignIn"
            options={stackoptions}
            component={SignIn}
          />
          <Stack.Screen
            name="GoogleSignInScreen"
            component={GoogleSignInScreen}
          />
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={({navigation}) => ({
              title: 'Products',
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({navigation}) => ({
              title: 'Products',
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation}) => ({
              title: 'Products',
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
