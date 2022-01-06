import React, { FunctionComponent, useContext } from 'react'
import {CONTEXT} from '../../context';


const Home:FunctionComponent = () => {

    const {
        state,
        dispatch,
    } : any = useContext(CONTEXT);
    console.log(state)

    return (
        <>
            start
        </>
    )
}

export default Home;