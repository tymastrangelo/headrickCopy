import React, { Component } from 'react'
import { UINewNote, Nav } from "./ui-components";
import "./App.css";

class NewNote extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <Nav/>
        <UINewNote style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewNote