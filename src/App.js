import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ListOfProd from './containers/ListOfProd';
//import scroll for search
//import Scroll from './components/Search/Scroll';
import SearchBox from './components/Search/SearchBox';
//import action for search
import {setSearchField} from './actions/actionSearch';
import logo from './logo.svg';
import './App.css';

//
const mapStateToProps = state =>{
	return{
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}
class App extends Component {
  render() {

    return (
      <div className="App">
     
      </div>

    );
  }
}

export default App;
