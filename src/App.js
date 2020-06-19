import React, {Component} from 'react';
import './App.css';
import Contacts from './components/contacts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: {}, clickButton : false}
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((data)=>{
          this.setState({data: data})
        })
        .catch(console.log('error fetching data'))
  }

  render(){

    return (
        <Contacts contacts = {this.state.data} />

    )
  }
}

export default App;
