import React, { useState, useEffect} from 'react'
import {getAuthInstance} from '../../actions/firebase'

export const FirebaseContext = React.createContext()

const FirebaseContainer = (props) => {

    //states
    let auth = getAuthInstance()
    
    return (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseContainer