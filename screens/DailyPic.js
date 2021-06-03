import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DailyPicScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.textStyle}>
                    Daily Pic Screen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});