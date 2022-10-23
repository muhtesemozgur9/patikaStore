import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        margin:10,
        padding: 10,
        borderRadius: 15,
        height: Dimensions.get('window').height * 0.45,
    },
    fullWidthProductContainer: {
        backgroundColor: '#efefef',
        margin:10,
        padding: 10,
        borderRadius: 15,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height * 0.40,
    },
    fullWidthProductImage: {
        padding: 10,
        width: '52%',
        // width: Dimensions.get('window').width * 0.8 - 20,
        height: Dimensions.get('window').height * 0.27,
        alignSelf: 'center'
    },
    productImageContainer: {
      backgroundColor: 'white',
      borderRadius: 15,
      alignContent: 'center'
    },
    productImage: {
        borderRadius: 15,
        padding: 10,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.27,
        alignSelf: 'center'
    },
    productTitle: {
        color: 'black',
        width: Dimensions.get('window').width * 0.4,
        fontSize: 18,
    },
    productPrice: {
        color: 'grey',
        fontSize: 14,
    },
    inStock: {
        display: 'none',
    },
    notInStock: {
       color: 'red',
       fontWeight: 'bold',
       fontSize: 16,
    }
});
