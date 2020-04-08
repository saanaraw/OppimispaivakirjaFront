import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.mydomain.com')
        .then(response => response.json())
        .then(data => this.setState({data}));
  }

  render() {
    return (
        <div className="App">

          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
              integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
              crossOrigin="anonymous"
          />
          <Header/>
          {/*<Search />*/}
          <Sidebar/>
          <Main/>
          <Footer/>
        </div>)
  }
}

export default App;