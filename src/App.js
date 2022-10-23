import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import productData from './products.json';
import Products from "./components/products";


const App = () => {
  console.log("productData =>",productData)
  const renderProduct = ({item}) =>{
    return (
        <Products product={item} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.storeName}>PATIKASTORE</Text>
        <View style={styles.searchContainer}>
          <TextInput
              style={styles.searchTitle}
              placeholder="Ara"
          />
        </View>


      </View>
      <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          data={productData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
    flex:1,
  },
  storeName: {
    color: 'blueviolet',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  searchContainer:{
    marginHorizontal:10,
    marginBottom: 10,
    height: Dimensions.get('window').height * 0.065,
    backgroundColor: '#ECEFF1',
    borderRadius: 15,
    justifyContent: 'center',
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#B6B8BC',
    marginLeft: 10,
  },
});

export default App;
