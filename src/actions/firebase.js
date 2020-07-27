import * as firebase from 'firebase/app'
import 'firebase/auth'

import credentials from '../../credentials'

firebase.initializeApp(credentials)

export const getAuthInstance = () => {
    return firebase.auth;
}
export const getDatabaseInstance = () => {
    return firebase.database;
}

export const  onAuthStateChange = (callback) => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({user: user, loggedOn: true})
      } else {
        callback({user: user, loggedOn: false})
      }
    });
  }


const getProviderConfig = (provider) => {
    switch(provider){
        case "Google":
            const result = new firebase.auth.GoogleAuthProvider()
            result.addScope('profile')
            result.addScope('email')
            return result;
            
        default:
            return null
            break;
    }
}

export const createAccount = (callback, email, password) => {
    

    console.log("createAccount")
    
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        loginByPassword(callback, email, password)
    })
    .catch((err) => {
        callback("failure", err)
    })
}

export const loginByPassword = (callback, email, password) => {

    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        callback("success", result)
    })
    .catch(err => {
        callback("failure", err)
    })
} 

export const postData = (callback, url, data) => {
    
    return fetch(`https://communityapp-bdcba.firebaseio.com/${url}.json`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( (response) => response.json())
    .then( (json) => {
        callback(json)
    })
    .catch( (error) =>{ 
        console.log("postDATA ERROR:" ,err )
    })
}

export const readData = (callback, url) => {

    return fetch(`https://communityapp-bdcba.firebaseio.com/${url}.json`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((json) => {
        callback(json)
    })
    .catch(error =>{ 
        console.log("readData ERROR:" ,error )
    })
    
}