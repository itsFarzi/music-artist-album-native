import React, { Component } from 'react';
import {View  , Text   , TouchableOpacity } from 'react-native'


const Button =({title , onPress})=>{
const {buttonStyle , textStyle} = styles
    return(
        <TouchableOpacity
        onPress={onPress}
        style={buttonStyle}
        >
        <Text
        style={textStyle}
        >
        {title}
        </Text>
        </TouchableOpacity>
      
    )
}

const styles = {
    buttonStyle : {
        flex : 1 ,
        alignSelf : 'stretch' ,
        backgroundColor : '#fff' ,
        borderRadius : 5 ,
        borderWidth : 1 ,
        borderColor  :'#e65c00' ,
        marginLeft : 5 ,
        marginRight : 5
    } ,
    textStyle :{
        alignSelf : 'center' ,
        color : '#e65c00' ,
        fontSize : 16 ,
        fontWeight  :'600' ,
        paddingTop : 10 ,
        paddingBottom : 10
    }
}

export {Button};