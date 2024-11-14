import {View, StyleSheet, ScrollView, Button} from 'react-native';
import React from 'react';
import Product from './Product';
import Header from './Header';

const ProductWrapper = ({navigation}) => {
  const products = [
    {
      name: 'iPhone',
      color: 'olive',
      price: 75000,
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAolBMVEX///8AAADPz88tLy/Z2dkhJCQkAADFN0Xkk5lGAAAOAAD/9ve6IjKxsbG1AAASAADym6PCwsInAAC7AABRAAA5AAAQEBD85Oj7tLrvlp3+6uz3pazbPUGNAA+TBBQeAAAvAAD6zdLMEyWMjIyDg4PVJzX81tvrdX5zAACCAADzk5jLKDqcnJzURFFOTk6kpKRycnJeXl7q6ur4wce4AiDGGy61pM12AAABoklEQVR4nO3c6WrCQBhGYScurbXuS0y11dbue6ve/63Vv01GCHkd+STngH+CgQdDJkOQr1IhShdPk/NCJdOrY/hm8+tRs1Cjm/k0vC/pLFzhlsNZaN/t3dJNVu1UnynIZPepfqW/de/c+OExMPDp2dWjzNG2B/idPbnv3MtrYODb2LWzR1urzNX8+fWc/e6aH2F9rcuF5wfcVev/L/L5KlF9cBYaeFGtFT89qjcAAtQCqAZQDaAaQDWAautO1zYwsQ7sARQzf4nXQ+NA88sMQDXzwHhjHDizvsyYX6gBqgFUKwFwGx9O40kGDgK/5z8AsHc4jSfzwPVQfBaHBsq7GYAAxeKN8btY3rCWfh0sA9D4s7ixDfvHihLsBwEC1DIPlDespX/9BlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGoA1QCqAVQDqAZQDaAaQDWAagDVAKoBVAOoBlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGonANwzIDFf4Qck7hkxmbfwIyb3DOnM2TGGdPrHnObrKGNOzQ+KtT9q1/6wYjqx/gAEazvEIRZSCgAAAABJRU5ErkJggg==',
    },
    {
      name: 'Samsung',
      color: 'black',
      price: 25000,
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAolBMVEX///8AAADPz88tLy/Z2dkhJCQkAADFN0Xkk5lGAAAOAAD/9ve6IjKxsbG1AAASAADym6PCwsInAAC7AABRAAA5AAAQEBD85Oj7tLrvlp3+6uz3pazbPUGNAA+TBBQeAAAvAAD6zdLMEyWMjIyDg4PVJzX81tvrdX5zAACCAADzk5jLKDqcnJzURFFOTk6kpKRycnJeXl7q6ur4wce4AiDGGy61pM12AAABoklEQVR4nO3c6WrCQBhGYScurbXuS0y11dbue6ve/63Vv01GCHkd+STngH+CgQdDJkOQr1IhShdPk/NCJdOrY/hm8+tRs1Cjm/k0vC/pLFzhlsNZaN/t3dJNVu1UnynIZPepfqW/de/c+OExMPDp2dWjzNG2B/idPbnv3MtrYODb2LWzR1urzNX8+fWc/e6aH2F9rcuF5wfcVev/L/L5KlF9cBYaeFGtFT89qjcAAtQCqAZQDaAaQDWAautO1zYwsQ7sARQzf4nXQ+NA88sMQDXzwHhjHDizvsyYX6gBqgFUKwFwGx9O40kGDgK/5z8AsHc4jSfzwPVQfBaHBsq7GYAAxeKN8btY3rCWfh0sA9D4s7ixDfvHihLsBwEC1DIPlDespX/9BlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGoA1QCqAVQDqAZQDaAaQDWAagDVAKoBVAOoBlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGonANwzIDFf4Qck7hkxmbfwIyb3DOnM2TGGdPrHnObrKGNOzQ+KtT9q1/6wYjqx/gAEazvEIRZSCgAAAABJRU5ErkJggg==',
    },
    {
      name: 'Redmi Phone',
      color: 'blue',
      price: 15000,
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAolBMVEX///8AAADPz88tLy/Z2dkhJCQkAADFN0Xkk5lGAAAOAAD/9ve6IjKxsbG1AAASAADym6PCwsInAAC7AABRAAA5AAAQEBD85Oj7tLrvlp3+6uz3pazbPUGNAA+TBBQeAAAvAAD6zdLMEyWMjIyDg4PVJzX81tvrdX5zAACCAADzk5jLKDqcnJzURFFOTk6kpKRycnJeXl7q6ur4wce4AiDGGy61pM12AAABoklEQVR4nO3c6WrCQBhGYScurbXuS0y11dbue6ve/63Vv01GCHkd+STngH+CgQdDJkOQr1IhShdPk/NCJdOrY/hm8+tRs1Cjm/k0vC/pLFzhlsNZaN/t3dJNVu1UnynIZPepfqW/de/c+OExMPDp2dWjzNG2B/idPbnv3MtrYODb2LWzR1urzNX8+fWc/e6aH2F9rcuF5wfcVev/L/L5KlF9cBYaeFGtFT89qjcAAtQCqAZQDaAaQDWAautO1zYwsQ7sARQzf4nXQ+NA88sMQDXzwHhjHDizvsyYX6gBqgFUKwFwGx9O40kGDgK/5z8AsHc4jSfzwPVQfBaHBsq7GYAAxeKN8btY3rCWfh0sA9D4s7ixDfvHihLsBwEC1DIPlDespX/9BlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGoA1QCqAVQDqAZQDaAaQDWAagDVAKoBVAOoBlANoBpANYBqANUAqgFUA6gGUA2gGkA1gGonANwzIDFf4Qck7hkxmbfwIyb3DOnM2TGGdPrHnObrKGNOzQ+KtT9q1/6wYjqx/gAEazvEIRZSCgAAAABJRU5ErkJggg==',
    },
  ];
  return (
    <View style={styles.container}>
      <Button
        title="Go To User List"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView>
        {products.map((item, i) => (
          <Product item={item} key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductWrapper;
