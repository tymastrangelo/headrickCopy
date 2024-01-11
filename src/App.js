import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Nav, NoteCollection, NoteCreateForm} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
import NewNote from './NewNote'
import EditNote from './EditNote';

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Nav/><NoteCollection/></div>} />
<Route exact path='/new' element= {<NewNote/>} />
<Route exact path='/new33' element= {<NewNote/>} />
<Route exact path='/cr' element= {<NoteCreateForm/>} />
<Route exact path='/edit/:cid' element= {<EditNote/>} />
</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);