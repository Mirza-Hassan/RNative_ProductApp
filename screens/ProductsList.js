import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {getProducts} from '../data/ProductsData';
import {Product} from '../screens/Product';

export function ProductsList({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function renderProduct({item: product}) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {productId: product.id});
        }}
      />
    );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={item => item.id.toString()}
      data={products}
      numColumns={2}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
