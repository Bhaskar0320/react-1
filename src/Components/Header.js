import React, { Component } from "react";
import "./Header.css";

//class can maintain state
class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "React Search App",
      keyword:"User Input Here"
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({keyword:event.target.value})
    this.props.useInput(event.target.value)
  };
  render() {
    return (
      //style = {objectname.property}    style={myStyle.header}//
      <header>
        <div className="logo">{this.state.title}</div>
        <input onChange={this.handleChange} />
        <div style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
          {this.state.keyword}
        </div>
      </header>
    );
  }
}

export default Header;

//style in recat should be double courly bracket, property not in qoute, no hyphen , camelCasing, data in qoute

//below code is having function only
// but code written above have funtion/method render() which is under component class.
// import React from "react";

// function Header() {
//   return (
//     <div>
//       <center>
//         <h3>React App</h3>
//       </center>
//     </div>
//   );
// }
