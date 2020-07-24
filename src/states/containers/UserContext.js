import React, { useState, useEffect} from 'react'
import {onAuthStateChange} from '../../actions/firebase'

export const UserContext = React.createContext()

const UserContainer = (props) => {
    
    //available states
    let [user, setUser] = useState('')

    useEffect(() => {
    
        console.log("check onAuthStateChanged")
        let unsubscribe = onAuthStateChange(setUser)
        return () => {
            unsubscribe()
        }
    }, [])
    
    return(

        <UserContext.Provider value = {user ? [user, setUser] : [null, null]}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContainer