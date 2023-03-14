import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartContext} from '../contextAPI/CartContext';
import {colors} from './constant';

export function Cart({navigation}) {
  const {items, getTotalPrice} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);

    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <View>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>Rs. {total}</Text>
        </View>
        <TouchableOpacity
          style={styles.btnWidth}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text style={styles.checkoutButton}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderItem({item}) {
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            {item.product.name} x {item.qty}
            {'                     '}
            <Text style={styles.productTotal}>Rs.{item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 10,
  },
  image: {
    width: '25%',
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    marginTop: 150,
    lineHeight: 5,
  },
  productTotal: {
    fontWeight: 'bold',
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 18,
    lineHeight: 30,
    color: '#333333',
    fontWeight: 'bold',
  },
  lineRight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  btnWidth: {
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 320,
    backgroundColor: colors.darkPurple,
    borderRadius: 5,
  },
  checkoutButton: {
    color: 'purple',
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
  },
});
