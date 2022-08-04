import {View, Text, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import externalStyle from '../styles/externalStyle.js';

class Home extends Component{
    render(){
        return(    
                <View style={externalStyle.screenBg}>
                    
                    {/* ROW ONE */}
                    <View style={externalStyle.contBtn}>
                        <TouchableOpacity style={[externalStyle.rowBtn,{
                                        backgroundColor:'#009eff'}]}
                                        onPress={()=>{
                                        this.props.navigation.navigate('ContractorAvailability')
                                }}>
                            <Text style={externalStyle.textStyle}>Contractor Availability</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW TWO */}
                    <View style={externalStyle.contBtn}>
                        <TouchableOpacity style={[externalStyle.rowBtn, {
                                        backgroundColor:'red'}]}
                                        onPress={()=>{
                                            this.props.navigation.navigate('AssignedJobs');
                                        }}>
                            <Text style={externalStyle.textStyle}>Assigned Jobs</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW THREE */}
                    <View style={externalStyle.contBtn}>
                        <View style={[externalStyle.rowBtn,
                                {backgroundColor:'orange'
                            }]}>
                            <Text style={externalStyle.textStyle}>Active Jobs</Text>
                        </View>
                    </View>
                </View> 
            ) 
    }
}

export default Home;