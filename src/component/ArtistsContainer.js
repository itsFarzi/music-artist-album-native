import React, { Component } from 'react';
import {  Text  , View} from 'react-native' ;
import firebase from '@firebase/app' ;
import '@firebase/auth'


//Component
import { Header } from './common' ;
import AlbumList from './AlbumList'
import LogIn from './LogIn'

class ArtistsContainer extends Component {

    state={
        loggedIn : false
    }

   componentWillMount(){
      
    
    firebase.initializeApp(
        {
        apiKey: "AIzaSyB7ZTwXMWjnGE7AbVpr_QlIW3135GvlXBA",
        authDomain: "musicartistauth.firebaseapp.com",
        databaseURL: "https://musicartistauth.firebaseio.com",
        projectId: "musicartistauth",
        storageBucket: "musicartistauth.appspot.com",
        messagingSenderId: "906667312816"
          }
    )

    firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({ loggedIn : true })
    }else
    {
        this.setState({ loggedIn : false })
    }
    }

    )
}

renderContent(){
    if(this.state.loggedIn){
        return <AlbumList />
    }
    return(
         <LogIn />
    )
}
render() {
    return (
        <View style={{flex :1}}>
            <Header 
            title={"Artists"}
            />
           {this.renderContent()}
        </View>
    );
}
}

export default ArtistsContainer;