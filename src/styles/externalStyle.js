import { StyleSheet } from "react-native";

const externalStyle=StyleSheet.create({

    //********* HOMEPAGE ***********
    
    contBtn:{
        flexDirection:'row',
        
        padding:20
    },

    rowBtn:{ 
        flex:1,
        margin: 'auto', 
        padding:40, 
        height: 200,
        border: 1,
        borderRadius: 10,
        justifyContent:'space-evenly'
        },
    
    textStyle:{
        color:'white',
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold'
    },

    //******* GENERAL STYLES */

    screenBg:{
        backgroundColor:'#1e1e1e',
        minHeight:'100%'
    }
})

export default externalStyle;