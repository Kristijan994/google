import React from 'react';
import Logo from '../assets/logo.png';
import Axios from 'axios';

// Reactstrap components
import {
    FormGroup,
    Input,
    Button
} from 'reactstrap';

// Components


export class Header extends React.Component {
  state = {
    keyValue: [
      {
        title:'Adding Property'
      }
    ]
  }

  suggestionObj = {
    description: 'react-suggestion-object'
  }

  onKeyup = (event) => {
    this.setState({
      title:event.target.value
    });
  }

  // Defining Default States
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    // Axios.get('https://jsonplaceholder.typicode.com/users?_limit=5')
    //   .then(res => console.log(res.data))

    // Without Axios
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    var { isLoaded, items } = this.state;
    return (
      <div className="Header column-flex-center">
        <div className="google-search">
         <img src={Logo} alt="Logo" className="img-fluid logo"/>
         <FormGroup className="mt-4">
          <Input onChange={this.onKeyup} type="text" name="text" placeholder="" className="custom-form search-key" placeholder="Type to start searching.." />
          <div className="search-dropdown">
            <ul className="list-results row-flex-start">
              {items.map(item => (
                <li key={item.id} className="result pointer text-left">
                  {this.state.title} - {item.name} <span className="api">* API Fetch</span> 
                  {/* <span className="queue keyup-result"></span> */}
                </li>
              ))};
            </ul>
          </div>
        </FormGroup>
        
        <div className="row-flex-center mt-4">
          <Button className="secondary btn-search offset-lr-5">Google Search</Button>
          <Button className="secondary btn-lucky offset-lr-5">I'm Feeling Lucky</Button>
        </div>
        </div>
      </div>
    )
  }
}

export default Header;