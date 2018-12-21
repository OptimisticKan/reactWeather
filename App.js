import React , {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivytyIndicator} from 'react-native';
import Weather from './components/Weather';

class App extends Component {
  state = {
    isLoaded:false
  };

  render(){
    const {isLoaded } = this.state;
    return(
      <View style={Styles.container}>
        {isLoaded ? null :(
          <Weather />
          )}
      </View>
    )
  }
} 

const Styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff"
  },

  loading: {
    flex:1,
    backgroundColor:"pink",
    justifyContent:"flex-end",
    paddingLeft:100
  },

  loadingText: {
    fontSize:38,
    marginBottom:100
  },

})
export default App;

