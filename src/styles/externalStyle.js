import { StyleSheet } from "react-native";

const externalStyle=StyleSheet.create({

    //********* HOMEPAGE ***********
    
    rowBtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },

    rowBtn1:{ 
        flex:1, 
        backgroundColor:'purple',
        padding:20, 
        justifyContent:'space-between'
        },

    rowBtn2:{
        flex:1, 
        backgroundColor:'red',
        padding:20, 
        justifyContent:'space-between'
        },
        rowBtn3:{
            flex:1,
            backgroundColor: 'orange',
            padding:20,
            justifyContent:'space-between'
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