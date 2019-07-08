import React, { PureComponent} from 'react';
import { connect } from "react-redux";
import { fetchDataFromFakeDB } from "./store/actions/overall";
import { status } from "./store/reducers/overall";

import './App.css';

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LoadingSpinner from "./component/LoadingSpinner";
import Routes from "./Routes";

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchFakeAPI();
  }

  render () {
    if (this.props.status === status.READY) {
      return (
        <div className="App">
          <Navbar/>
          <main className="App-main">
            <Routes/>
          </main>
          <Footer/>
        </div>
      );    
    } else 
      return (
        <LoadingSpinner />
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFakeAPI: () => dispatch(fetchDataFromFakeDB())
  }
}

const mapStateToProps = state => {
  return {
    status: state.overall.status,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
