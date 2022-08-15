import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import externalStyle from '../styles/externalStyle.js';

class ContractorAvailability extends Component {
    render(){
        return(
            <View style={externalStyle.screenBg} >
                <View style={externalStyle.callToAction}>

                    {/* ADD AVAILABILITY CONTAINER */}
                    <View style={externalStyle.ctaContainer}>
                        <View style={externalStyle.dateHeader}>
                            <Text style={externalStyle.textDate}>
                                DATE
                            </Text>
                        </View>

                        <View style={externalStyle.cmbDate}>
                            <TextInput
                                placeholder="Date Available"
                                
                                onChangeText={(text)=> this.setState({text})}>
                                    <Text style={{fontSize: 28, color:'#fff', borderColor:'black'}}/>                                        
                            </TextInput>
                        </View>

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


