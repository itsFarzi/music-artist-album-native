import React, { Component } from 'react';
import { View , ActivityIndicator } from 'react-native'

const Spinner=({size})=>{
    return(
        <View
        style={styles.conatiner}
        >
            <ActivityIndicator  size={ size || 'large'} />
        </View>
    )
}
const styles = {
    conatiner :{
        flex : 1 ,
        justifyContent : 'center' ,
        alignItems : 'center'
    }
}
export  {Spinner};