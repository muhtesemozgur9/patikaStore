import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './product.style';

const products = ({product}) =>{
    console.log("props =>",product)
    return (
      <View style={[product.id === 10 ? styles.fullWidthProductContainer:styles.container]}>
          <View style={styles.productImageContainer}>
              <Image style={[product.id === 10 ? styles.fullWidthProductImage:styles.productImage]} source={{uri:product.imgURL}}></Image>
          </View>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={[product.inStock === true ? styles.inStock:styles.notInStock]}>STOKTA YOK</Text>
      </View>
    );
}


export default products;
