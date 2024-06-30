import { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const Div = styled.div`
    padding: 40px
    wight: 0
    border-radius: 20px
`

class WhoamI extends Component { 
  constructor(props){
    super(props)
    this.state = {
      years: 27,
      position: ""
    }
  }

  Newyear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e) =>{
    this.setState({
      position: e.target.value
    })
  }

  render(){
    const {name, surname, link} = this.props
    const {position, years} = this.state
    return(
      <div>
        <button onClick={this.Newyear}>{this.state.text}</button>
        <Div>My name is {name}, surname - {surname}, age - {years}
         position = {position}</Div>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
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
