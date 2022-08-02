import * as React from 'react';
import {View, Text} from 'react-native';
import externalStyle from '../styles/externalStyle.js';

export default function Home({navigation}){
    return(
        <View style={externalStyle.screenBg}>
            
            {/* ROW ONE */}
            <View style={externalStyle.rowBtn}>
                <View style={externalStyle.rowBtn1}>
                    <Text style={externalStyle.textStyle}>Btn1</Text>
                </View>
            </View>

            {/* ROW TWO */}
            <View style={externalStyle.rowBtn}>
                <View style={externalStyle.rowBtn2}>
                    <Text style={externalStyle.textStyle}>Btn2</Text>
                </View>
            </View>

            {/* ROW THREE */}
            <View style={externalStyle.rowBtn}>
                <View style={externalStyle.rowBtn3}>
                    <Text style={externalStyle.textStyle}>Btn3</Text>
                </View>
            </View>
        </View> 
    )
}