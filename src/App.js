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
                <div className="row">
                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>

                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>
                    <BookList/>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
