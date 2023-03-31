import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constant';

export default class ListProduct extends Component {
  // state = {
  //   names: [
  //     {
  //       name: 'Pandol',
  //       id: 1,
  //       price: 18.0,
  //       image: require('./assets/user.png'),
  //     },
  //   ],
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text2}>Products</Text>

        <ScrollView>
          <View style={styles.row}>
            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine1.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>2Sum Injection 2g</Text>
                <Text style={styles.text}>Rs. 480.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine2.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>Abacus 40mg/5ml Syp</Text>
                <Text style={styles.text}>Rs. 240.00</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine3.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>A-Glip 50mg Tab.</Text>
                <Text style={styles.text}>Rs. 180.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine4.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>7ILVER SEAS 6CAPS</Text>
                <Text style={styles.text}>Rs. 490.00</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine5.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>2Blink Eye Drops</Text>
                <Text style={styles.text}>Rs. 400.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine6.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>Abocal Tab</Text>
                <Text style={styles.text}>Rs. 207.00</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine7.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>2ABOCRAN SACHET</Text>
                <Text style={styles.text}>Rs. 447.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine8.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>Acebex Capsules</Text>
                <Text style={styles.text}>Rs. 280.00</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine9.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.text}>Aceclofenac</Text>
                <Text style={styles.text}>Rs. 290.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.widgets}>
              <View>
                <Image
                  source={require('../../assets/pharam/medicine10.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>ACEFYL COUGH</Text>
                <Text style={styles.text}>Rs. 95.00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 2,
  },
  text2: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 40,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  widgets: {
    backgroundColor: '#fff',
    elevation: 2,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
});

