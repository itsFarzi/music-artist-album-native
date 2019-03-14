import React, { Component } from 'react';
import {View  , Text , StyleSheet} from 'react-native'


const Header =({title})=>{ 
const {header, text} = styles
    return (
            <View style={header}>
                <Text
                style={text}
                >
                {title}
                </Text>
            </View>
        );
}

const styles = {
  header:{
      backgroundColor : "#f8f8f8" ,
      justifyContent : 'center' ,
      alignItems : 'center' ,
      height :60 ,
      paddingTop : 15,
      elevation :4
  } ,
  text:{
      fontSize :20 ,
      color : 'black'
  }
}

export {Header};