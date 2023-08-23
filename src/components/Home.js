import React from 'react'
import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';
import HooksIceCreamContainer from './HooksIceCreamContainer';
import NewCakeContainer from './NewCakeContainer';

export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <hr />
            <CakeContainer /> 
            <HooksCakeContainer />
            <HooksIceCreamContainer />
            <NewCakeContainer />
        </div>
    )
}
