import React, { Component } from 'react';
import {View  , Text  , Image , Linking} from 'react-native'

// Component
import {Card , CardSection , Button} from './common'

const AlbumDetail =({albums})=> {
const {title , artist , thumbnail_image ,  image , url} = albums
const {headerContnt , headerThumN ,headerThumbCont , albumImg} = styles
        return (
        <Card>
            <CardSection>
                <View
                 style={headerThumbCont}
                >
                <Image 
                style={headerThumN}
                source={{uri : thumbnail_image}}
                />
                </View>
                <View
                style={headerContnt}
                >
                <Text
                style={{fontSize : 18 , color : 'black'}}
                >
                {title}
                </Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                style={albumImg}
                source= {{uri : image}}
                />
            </CardSection>

            <CardSection>
                <Button  
                title={'Buy Now'}
                 onPress={()=>Linking.openURL(url)} />
            </CardSection>
        </Card>
        );
}

const styles = {
    headerContnt:{
        flexDirection : 'column' ,
        justifyContent : 'space-around' 
    } ,
    headerThumN : {
        height : 50 ,
        width : 50
    } ,
    headerThumbCont :{
        justifyContent : 'center' ,
        alignItems : 'center' ,
        marginLeft : 10 ,
        marginRight : 10
    } ,
    albumImg : {
        height : 300 , 
        flex : 1 ,
        width : null
    }
}

export default AlbumDetail;