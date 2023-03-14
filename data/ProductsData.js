const MEDICINES = [
  {
    name: '2Sum Injection 2g',
    id: 1,
    price: 480.0,
    image: require('../assets/pharam/medicine1.jpeg'),
    description: 'some description',
  },
  {
    name: 'Abacus 40mg/5ml Syp',
    id: 2,
    price: 240.0,
    image: require('../assets/pharam/medicine2.jpeg'),
    description: 'some description',
  },
  {
    name: 'A-Glip 50mg Tab',
    id: 3,
    price: 180.0,
    image: require('../assets/pharam/medicine3.jpeg'),
    description: 'some description',
  },
  {
    name: '7ILVER SEAS 6CAPS',
    id: 4,
    price: 490.0,
    image: require('../assets/pharam/medicine4.png'),
    description: 'some description',
  },
  {
    name: '2Blink Eye Drops',
    id: 5,
    price: 400.0,
    image: require('../assets/pharam/medicine5.jpeg'),
    description: 'some description',
  },
  {
    name: 'Abocal Tab',
    id: 6,
    price: 207.0,
    image: require('../assets/pharam/medicine6.jpeg'),
    description: 'some description',
  },
  {
    name: '2ABOCRAN SACHET',
    id: 7,
    price: 447.0,
    image: require('../assets/pharam/medicine7.png'),
    description: 'some description',
  },
  {
    name: 'Acebex Capsules',
    id: 8,
    price: 280.0,
    image: require('../assets/pharam/medicine8.jpeg'),
    description: 'some description',
  },
  {
    name: 'Aceclofenac',
    id: 9,
    price: 290.0,
    image: require('../assets/pharam/medicine9.jpeg'),
    description: 'some description',
  },
  {
    name: 'ACEFYL COUGH',
    id: 10,
    price: 95.0,
    image: require('../assets/pharam/medicine10.png'),
    description: 'some description',
  },
];

export function getProducts() {
  return MEDICINES;
}

export function getProduct(id) {
  return MEDICINES.find(product => product.id == id);
}
