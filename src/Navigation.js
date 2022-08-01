import * as React from 'react';
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//SCREENS
import Home from './views/Home.js';
import AssignedJobs from './views/AssignedJobs.js';
import ContractorAvailability from './views/ContractorAvailability.js';

//SCREEN NAMES
const homeName = 'Home';
const availName = 'ContractorAvailability';
const assignName = 'AssignedJobs';

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route})=> ({
                    tabBarIcon: ({focused, color,size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === availName ){
                            iconName = focused ? 'list' : 'list-outline'
                        }
                        else if (rn === assignName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom: 10, fontSize:10},
                    style:{padding: 10, height: 70}
                }}
                >
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={availName} component={ContractorAvailability}/>
                <Tab.Screen name={assignName} component={AssignedJobs}/>

            </Tab.Navigator>

        </NavigationContainer>
    )
}
