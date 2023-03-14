import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from './constant';

import {getProduct} from '../data/ProductsData';
import {CartContext} from '../contextAPI/CartContext';

export function ProductDetails({navigation, route}) {
  const {productId} = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const {addItemToCart} = useContext(CartContext);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>Rs. {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          {/* <Text>Quantity : 2</Text> */}
          <TouchableOpacity
            style={styles.btnWidth}
            activeOpacity={0.8}
            onPress={onAddToCart}>
            <Text style={styles.BuyNowButton}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCardbtnWidth}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Text style={styles.AddToCartButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnWidth: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 140,
    backgroundColor: colors.darkPurple,
  },
  addToCardbtnWidth: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 140,
    marginTop: 10,
    backgroundColor: 'orange',
  },
  AddToCartButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
  },
  BuyNowButton: {
    color: 'purple',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
  },
  image: {
    height: 250,
    width: 150,
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'purple',
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: 'purple',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  session: {
    marginTop: 10,
  },
});
