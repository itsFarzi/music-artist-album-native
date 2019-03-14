import React, { Component } from 'react';
import {View} from 'react-native'

const CardSection =({children})=> {
    return (
        <View
        style={styles.cardSection}
         >
        {children}
        </View>
    );
}
const styles= {
    cardSection : {
        borderBottomWidth : 1 ,
        padding : 5 ,
        backgroundColor : '#fff' ,
        justifyContent : 'flex-start' ,
        flexDirection : 'row' ,
        borderColor : '#ddd' ,
        position : 'relative'
    }
}

export{ CardSection};