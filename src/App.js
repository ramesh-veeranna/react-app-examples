import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageNotFound from './components/404';
import Users from './components/Users';
import Posts from './components/Posts';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksObjectExample from './components/HooksObjectExample';
import HooksArrayExample from './components/HooksArrayExample';
import React from 'react';
import HooksContextExample from './components/HooksContextExample';
import HooksReducer from './components/HooksReducerExample';
import HooksReducerComplexExample from './components/HooksReducerComplexExample';
import HooksReducerUseEffentExample from './components/HooksReducerUseEffentExample';
import HooksRefExample from './components/HooksInputRefExample';
import HooksUseRefExample from './components/HooksUseRefExample';
import UseCustomHooks from './components/UseCustomHooks';
import UseCustomHookComplex from './components/UseCustomHookComplex';
import UseCustomHooksForFormInputs from './components/UseCustomHooksForFormInputs';

export const UserContext = React.createContext

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar title='React App with Examples' />
                <div className='container' style={{marginTop: '20px'}}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/posts/create' element={<CreatePost />} />
                        <Route path='/posts/:id/edit' element={<EditPost />} />
                        {/* <UserContext.Provider value={'Ramesh Veeranna'}> */}
                            <Route path='/hooks' element={
                                <>
                                    <HooksObjectExample /> 
                                    <HooksArrayExample /> 
                                    <HooksContextExample />
                                    <HooksReducer />
                                    <HooksReducerComplexExample />
                                    <HooksReducerUseEffentExample />
                                </>
                            } />
                        {/* </UserContext.Provider> */}

                        <Route path='/hooks-2' element={
                            <>
                                <HooksRefExample />
                                <HooksUseRefExample />
                                <UseCustomHooks />
                                <UseCustomHookComplex />
                                <UseCustomHooksForFormInputs />
                            </>
                        } />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>   
                </div>   
            </BrowserRouter>
        </Provider>
    );
}

export default App;
