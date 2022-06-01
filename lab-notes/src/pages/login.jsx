import React, { Component } from "react";
import Button from 'algun lado'
import firebase from '../firebase/firebase-config';
import { signInWithRedirect } from 'firebase/auth';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()signInWithRedirect(provider).then(result =>{
            console.log('login google',result);
        })
    }
    render(){
        return(
            <div>
                <Button variant='contained' onClick={this.Login}>
                    Iniciar sesión con Google
                </Button>
            </div>
        );
    }
}

// test para firebase
// test para router 
// examinar historias de usuario 
// formulario de autenticacion: id que devuelva algo 
// get elemntby id del imput
// test del boton cuando el usuario haga esto es el expect pase esto que es el tobe que espero que pase
// hacer la lista de los test que quieros
// testeo la funcipon, checkear el DOMException
// md links imput y output 
// mirar desde el punto de vista del usuario
// automatizar para que los push del github implementen los test con github actions