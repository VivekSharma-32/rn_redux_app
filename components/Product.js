import {View, Text, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';

const Product = ({item}) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    console.warn('Called', item);
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    console.warn(item);
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartData.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: '#eeeeee',
        borderWidth: 1,
        paddingBottom: 20,
        marginBottom: 60,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
      {isAdded ? (
        <Button
          title="Remove From Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;
