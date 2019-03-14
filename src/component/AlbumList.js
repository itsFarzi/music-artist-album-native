import React, { Component } from 'react';
import {View  , Text , ScrollView } from 'react-native'
import Axios from 'axios';

import firebase from '@firebase/app' ;
import '@firebase/auth'

//Componen
import  AlbumDetail from './AlbumDetail' ;
import {Button} from './common'

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state={
            albums : []
        }
    }
    componentWillMount(){
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({ albums : res.data}))
    }
    renderAlbums(albums){
        if (albums){
        return albums.map((items , index)=>{
         return(<AlbumDetail key={index} albums={items} />
         )
         })
        }
      
    }
    render() {
        //console.log(this.state.albums)
        return (
         <ScrollView>
              <Button 
              title={'Log Out'} 
              onPress={()=>firebase.auth().signOut()}
              />
             {this.renderAlbums(this.state.albums)}
         </ScrollView>
        );
    }
}

export default AlbumList;