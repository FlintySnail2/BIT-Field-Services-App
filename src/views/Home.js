import * as React from 'react';
import {View, Text} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={{backgroundColor:'#1e1e1e'}}>
            <View style={{flexDirection:'row', 
                    padding:10,
                    justifyContent:'space-between'}}>

            {/* ROW ONE */}
                <View style={{flex:1, 
                            backgroundColor:'purple',
                            padding:20, 
                            justifyContent:'space-between'
                            
                            }}>

                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn1</Text>
                </View>

                <View style={{flex:1, 

                            backgroundColor:'green', 
                            padding:20,
                            justifyContent:'space-evenly'}}>
                                
                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn2</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', 
                    padding:10,
                    justifyContent:'space-between'}}>

            {/* ROW TWO */}
                <View style={{flex:1, 
                            backgroundColor:'red',
                            padding:20, 
                            justifyContent:'space-between'
                            
                            }}>

                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn3</Text>
                </View>

                <View style={{flex:1, 

                            backgroundColor:'blue', 
                            padding:20,
                            justifyContent:'space-evenly'}}>
                                
                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn4</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', 
                    padding:10,
                    justifyContent:'space-between'}}>

            {/* ROW THREE */}

                <View style={{flex:1, 
                            backgroundColor:'purple',
                            padding:20, 
                            justifyContent:'space-between'
                            
                            }}>

                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn5</Text>
                </View>

                <View style={{flex:1, 

                            backgroundColor:'orange', 
                            padding:20,
                            justifyContent:'space-evenly'}}>
                                
                    <Text style={{color:'white',
                                textAlign:'center',
                                fontSize:28,
                                fontWeight:'bold'}}>Btn6</Text>
                </View>
            </View>

            

        </View>

        
    )
}