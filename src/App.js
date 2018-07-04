import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {fetchHeroes, fetchHeroesIfNeeded, rejectHeroes} from './actions';

import HeroesList from './components/heroesList'

import './App.css';

class App extends Component {

  // static PropTypes = {   heroes }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchHeroesIfNeeded());
  }

  render() {
    const {isFetching, heroesList} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Dota</h1>
        </header>

        <div className="heroes-list">
          {!isFetching
            ? <HeroesList heroesList={heroesList}/>
            : <h2>Loading...</h2>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {heroes} = state;

  const {isFetching, heroesList} = heroes || {
    isFetching: true,
    heroesList: []
  }

  return {isFetching, heroesList}

}

export default connect(mapStateToProps)(App);
