import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, 
ImageBackground, Platform, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            latitude: '',
            longitude: ''
        }
    }
    render(){
        const {latitude, longitude}= this.state;
        const path= 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>

                <ImageBackground 
                style={styles.backgroundImg}
                source={require('../assets/stars.gif')}
                >
                <View style={styles.titleBar}>
                    <Text style = {styles.titleText}>
                        Star Map
                    </Text>
                </View>

                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.location.latitude,
                        longitude: this.state.location.longitude,
                        latitudeDelta: 100,
                        longitudeDelta: 100
                    }}>
                    
                    <Marker
                        coordinate={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}
                    ></Marker>

                    </MapView>
                <View>

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Latitude"
                    placeholderTextColor= "white"
                   
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Longitude"
                    placeholderTextColor= "white"
                   
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }}
                />
                </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1

    },
    container:{
        flex: 1
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImg: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color: 'white'
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:"center"
    }
});