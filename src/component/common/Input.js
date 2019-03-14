import React, { Component } from 'react';
import {Text ,  View ,  TextInput} from 'react-native'

const Input =({label , onChange , value  , placeholder , secureTextEntry})=>{
    const { conatiner , inputStyle , labelStyle   } = styles
        return (
            <View
            style={conatiner}
            >
            <Text
            style={labelStyle}
            >
            {label}
            </Text>
            <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={inputStyle}
            value={value}
            onChangeText={onChange}
            />
            </View>
        );
}
const styles = {
    inputStyle :{
        color : 'gray',
        paddingRight : 5 ,
        paddingLeft : 5 ,
        fontSize : 18 ,
        flex : 3 ,
        alignItems : 'center'
    } ,
    labelStyle : {
        flex : 1 ,
        paddingLeft : 2 ,
        fontSize : 20 ,
        color : 'black'
    } ,
    conatiner : {
        height : 40 ,
        flex : 1 ,
        flexDirection : 'row' ,
        alignItems : 'center'
    }
}
export { Input };