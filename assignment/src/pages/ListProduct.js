import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductDetails from './ProductDetails';
const medicines = [
  {
    name: '2Sum Injection 2g',
    id: 1,
    price: 480.0,
    image: require('../../assets/pharam/medicine1.jpeg'),
  },
  {
    name: 'Abacus 40mg/5ml Syp',
    id: 2,
    price: 240.0,
    image: require('../../assets/pharam/medicine2.jpeg'),
  },
  {
    name: 'A-Glip 50mg Tab',
    id: 3,
    price: 180.0,
    image: require('../../assets/pharam/medicine3.jpeg'),
  },
  {
    name: '7ILVER SEAS 6CAPS',
    id: 4,
    price: 490.0,
    image: require('../../assets/pharam/medicine4.png'),
  },
  {
    name: '2Blink Eye Drops',
    id: 5,
    price: 400.0,
    image: require('../../assets/pharam/medicine5.jpeg'),
  },
  {
    name: 'Abocal Tab',
    id: 6,
    price: 207.0,
    image: require('../../assets/pharam/medicine6.jpeg'),
  },
  {
    name: '2ABOCRAN SACHET',
    id: 7,
    price: 447.0,
    image: require('../../assets/pharam/medicine7.png'),
  },
  {
    name: 'Acebex Capsules',
    id: 8,
    price: 280.0,
    image: require('../../assets/pharam/medicine8.jpeg'),
  },
  {
    name: 'Aceclofenac',
    id: 9,
    price: 290.0,
    image: require('../../assets/pharam/medicine9.jpeg'),
  },
  {
    name: 'ACEFYL COUGH',
    id: 10,
    price: 95.0,
    image: require('../../assets/pharam/medicine10.png'),
  },
];
const ListProduct = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon name="bars" size={20} />
        <Text style={styles.pageHeading}>Products</Text>
        <Icon name="shoppingcart" size={20} />
      </View>
      <FlatList
        keyExtractor={medicines => medicines.id}
        numColumns={2}
        data={medicines}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={item.image} style={styles.imageContainer} />
              <Text style={styles.textContainer}>{item.name}</Text>
              <Text>Rs. {item.price}</Text>
            </View>
          );
        }}
      />
      <ProductDetails medicines={medicines} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  pageHeading: {
    fontWeight: '800',
    fontSize: 20,
    color: 'purple',
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
  textContainer: {
    fontSize: 15,
    fontWeight: '800',
  },
});

export default ListProduct;
