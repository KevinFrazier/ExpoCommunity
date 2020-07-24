import React from 'react'

import FirebaseContainer, {FirebaseContext} from './containers/FirebaseContext'
import UserContainer, {UserContext} from './containers/UserContext'

const compose = (...Containers) => (App) => (props) => (

    Containers.reduce((acc, Container) => {
        
        console.log("in reduce")
        return (
        <Container>
            {acc}
        </Container>
        )
    }
    , <App/>)

    )

export {UserContext, FirebaseContext}
export default compose(UserContainer,FirebaseContainer) 