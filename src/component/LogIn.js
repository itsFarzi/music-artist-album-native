import React, { Component } from 'react';
import {Text ,View} from 'react-native' ;
import firebase from '@firebase/app' ;
import '@firebase/auth'

////////////
import {Card , CardSection , Button , Input , Spinner} from './common'

class LogIn extends Component{
  
    state={
        email : '' ,
        password : '' ,
        error : '' ,
        succes : ''   ,
        loading : false
    }
   onPressLogIn(){
   const { email , password  } = this.state
   
   this.setState({
       error : '' ,
       succes : '' ,
       loading : true
   })

   firebase.auth().signInWithEmailAndPassword(email , password )
   .then( this.logInSucces.bind(this))
   .catch(()=>{
       firebase.auth().createUserWithEmailAndPassword(email , password)
       .then(this.logInSucces.bind(this))
       .catch(this.logInFailed.bind(this))
   } )
   
   }
   logInSucces(){
       this.setState({
           email : '' ,
           password : '' ,
           loading : false ,
           error : '' ,
           succes : 'Log In Succesfully'
       })
   }
   logInFailed(){
       this.setState({
           loading : false ,
           error : 'Log in failed'
       })
       setTimeout(()=>{
               this.setState({ error: '' })
           } , 1000
       )
   }

   renderButton(){
       if (this.state.loading) {
         return(
             <Spinner size='small'/>
         )
       }
       return(
        <Button 
                onPress={this.onPressLogIn.bind(this)}
                 title={'Log In'}
                />
       )
   }

    render(){
        return(
        <View>
          <Card> 
            <CardSection>
               <Input
                label = 'Email'
                onChange={email => this.setState({email}) }
                value = {this.state.email}
                placeholder={'user@gmail.com'}
               />
            </CardSection>
            
            <CardSection>
            <Input
                label = 'Password'
                onChange={password => this.setState({password}) }
                value = {this.state.password}
                secureTextEntry
               />
            </CardSection>
            

            <CardSection>
               {this.renderButton()}
            </CardSection>
            
          
         </Card> 
         
         <Text
             style={styles.succes}
             >
             {this.state.succes}
             </Text>
             <Text
             style={styles.error}
             >
             {this.state.error}</Text>

           </View>  
        )  
         
    }
}

const styles = {
    error : {
        fontSize : 18 ,
        color : 'red' ,
        alignSelf : 'center' ,
        justifyContent : 'center'
    } ,
    succes : {
        fontSize : 18 ,
        color : 'green' ,
        alignSelf : 'center'
    }
}

export default LogIn;
