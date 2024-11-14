import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text
        style={{
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            padding: 10,
            borderRadius: 20,
            height: 40,
            width: 40,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>{cartItems}</Text>
        </View>
      </Text>
    </View>
  );
};

export default Header;
