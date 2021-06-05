import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,
ImageBackground, Platform} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <SafeAreaView style={styles.droidSafeArea}/>
                
                <ImageBackground 
                source={require('../assets/space.gif')}
                >
                <View style={styles.titleBar}>
                    <Text style = {styles.titleText}>
                        Stellar App
                    </Text>
                </View>

                <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>{
                    this.props.navigation.navigate("Spacecrafts")
                }}
                >
                    <Text style={styles.routeText}>
                        Spacecrafts
                    </Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Image 
                    style={styles.iconImg}
                    source={require('../assets/space_crafts.png')}/>

                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                }}>
                    <Text style={styles.routeText}>
                        Daily Pics
                    </Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Image 
                    style={styles.iconImg}
                    source={require('../assets/daily_pictures.png')}/>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}
                >
                    <Text style={styles.routeText}>
                        Star Map
                    </Text>
                    <Text style={styles.knowMore}>{"Know More--->"}</Text>
                    <Image 
                    style={styles.iconImg}
                    source={require('../assets/star_map.png')}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:"center"
    },
    routeCard:{
        flex:0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        borderWidth:2,
        backgroundColor: "white"
    },
    routeText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'times new roman',
        marginTop: 75,
        paddingLeft: 30
    },
    backgroundImg: {
        flex: 1,
        resizeMode: 'cover',
    },
    knowMore: {
        paddingLeft: 30,
        color: 'red',
        fontSize: 15
    },
    iconImg: {
        position: 'absolute',
        height: 150,
        width: 150,
        resizeMode: 'contain',
        right: 20,
        top: -80
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color: 'white'
    }
});