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
    },

    //***** AVAILABILITIES *******/
    callToAction:{
    flex:1,
    backgroundColor: '#fff',
    height: 50,
    padding:20
    },

    ctaContainer:{
        flexDirection:'row'
    },

    addBtn:{
        justifyContent:'flex-end',
        backgroundColor:'#009eff',
        border:1,
        borderRadius:10
    },

    dateHeader:{
        justifyContent:'flex-start', 
    },

    cmbDate:{
        justifyContent:'center',
        paddingLeft: 20,
        paddingRight: 20,
        color:'#1e1e1e',
        width:200,
        height:75
    },

    textDate:{
        
        color:'black',
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        padding:10
    },

    textAddBtn:{
        color:'white',
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        padding:10  
    },
})

export default externalStyle;