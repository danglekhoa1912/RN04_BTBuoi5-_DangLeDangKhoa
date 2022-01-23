import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class BaiTap5 extends Component {
  state = {
    image: require('../image/haha.png'),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Bạn đang cảm thấy như thế nào ?</Text>
        <View style={styles.containerMainImg}>
          <Image styles={styles.mainImage} source={this.state.image}></Image>
        </View>
        <View style={styles.containerImg}>
          <TouchableOpacity
            onPress={() =>
              this.setState({image: require('../image/angry.png')})
            }>
            <Image
              style={styles.image}
              source={require('../image/angry.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({image: require('../image/care.png')})
            }>
            <Image
              style={styles.image}
              source={require('../image/care.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({image: require('../image/haha.png')})
            }>
            <Image
              style={styles.image}
              source={require('../image/haha.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({image: require('../image/like.png')})
            }>
            <Image
              style={styles.image}
              source={require('../image/like.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({image: require('../image/love.png')})
            }>
            <Image
              style={styles.image}
              source={require('../image/love.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({image: require('../image/sad.png')})}>
            <Image
              style={styles.image}
              source={require('../image/sad.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerImg: {
    flexDirection: 'row',
  },
  containerMainImg: {
    marginVertical: 30,
  },
  mainImage: {
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: 45,
    height: 45,
    marginHorizontal: 10,
  },
});
