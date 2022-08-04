import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { TextInput } from 'react-native-web';
import externalStyle from '../styles/externalStyle.js';

class ContractorAvailability extends Component {
    render(){
        return(
            <View style={externalStyle.screenBg}>
                <View style={externalStyle.callToAction}>
                    <View style={externalStyle.ctaContainer}>
                        <Text style={externalStyle.textDate}>
                            DATE
                        </Text>
                        <TextInput style={externalStyle.cmbDate}>

                        </TextInput>
                        <View style={externalStyle.addBtn}>
                            <Text style={externalStyle.textAddBtn}>
                                ADD
                            </Text>
                        </View>
                        
                    </View>

                </View>
                
            </View>

        )
    }
}

export default ContractorAvailability;

// export default function ContractorAvailability({navigation}){
//     return(
//         <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
//             <Text
//                 onPress={() => navigation.navigate('Home')}
//                 style={{fontSize:26, fontWeight:'bold'}}>Availability</Text>
//         </View>
//     )
// }


