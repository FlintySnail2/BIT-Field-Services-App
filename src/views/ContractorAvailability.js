import * as React from 'react';
import {View, Text} from 'react-native';

export default function ContractorAvailability({navigation}){
    return(
        <View style={{flex:1, alignItems, justifyContent:center}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{fontSize:26, fontWeight:'bold'}}>Home</Text>
        </View>
    )
}

