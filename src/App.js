import React, {Component} from 'react';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="App">
            <Header/>
            <div className="body container-fluid">
                <BookList/>
            </div>
      </div>
    );
  }
}

export default App;
