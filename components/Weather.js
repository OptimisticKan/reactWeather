import React , {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import propTypes from 'prop-types';

const weatherCases={
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It's like a rain",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is 💩",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    },
};


function Weather({weatherName,temperature}) {

    return ( 
        //위 const weatherCases 정보받아옴.
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container} >
        <View style = {styles.upper} >
        <MaterialCommunityIcons color = "white" size = {144} name = {weatherCases[weatherName].icon}/> 
        <Text style = {styles.temperature} > {temperature}º </Text> 
        </View> 
        <View style = {styles.lower}>
        <Text style = {styles.title}> {weatherCases[weatherName].title} </Text> 
        <Text style = {styles.subtitle}> {weatherCases[weatherName].subtitle} </Text>
        </View> 
        </LinearGradient>
    );
}

Weather.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherName: propTypes.string.isRequired
};

/*class Weather extends Component {
    render(){
        return (
            <LinearGradient colors={["#00C6FB","pink"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons name="ios-snow" size={130} color="white"/>
                    <Text style={styles.temperature}>-4 ℃</Text>
                </View>
                <View style={styles.lower}>
                <Text style={styles.title}>Awesome white X-mas!</Text>
                <Text style={styles.subtitle}>This is hell to the single!</Text>
                </View>
            </LinearGradient>
        );
    }
}
*/
const styles= StyleSheet.create({
    container: {
        flex:1
    },
    
    upper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"transparent"
    },
    temperature:{
        fontSize:48,
        color:"white",
        backgroundColor:"transparent",
        marginTop:10

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