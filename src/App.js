import { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class WhoamI extends Component { 
  constructor(props){
    super(props)
    this.state = {
      years: 27,
      text:'+++'
    }
  }

  Newyear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  render(){
    const {name, surname, link} = this.props
    return(
      <div>
        <button onClick={this.Newyear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}
function App() {
  return (
    <div className='App'>
      <WhoamI name = "Asyl" surname="Duldiyev" link="facebook.com"/>
      <WhoamI name = "Adam" surname="Kenny" link="facebook.com"/>
    </div>
  );
}

export default App;
