import React , {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';

class Weather extends Component {
    render(){
        return (
            <LinearGradient colors={["#00C6FB","pink"]} style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.title1}>Weather Icon</Text>
                </View>
                <View style={styles.lower}>
                <Text style={styles.title}>Good Weather Icon</Text>
                <Text style={styles.subtitle}>For more info just get out!</Text>
                </View>
            </LinearGradient>
        );
    }
}
const styles= StyleSheet.create({
    container: {
        flex:1
    },
    
    upper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
   
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25
    },

    title:{
        fontSize:30,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:10,
        fontWeight:"300"
    },

    subtitle:{
        fontSize:30,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:100
    },

    title1:{
        fontSize:40,
        color:"black",
        fontWeight:"500"
    },
});

export default Weather;