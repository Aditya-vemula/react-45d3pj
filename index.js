import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import FootInches from "./FootInches.js";
import CreatableSelect from "react-select/creatable";
// import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temperature: "2313",
      foot: "",
      inches: "",
      ddOptions: [
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" },
        { name: "dasdad", value: "dasdadad" }
      ]
    };
  }
  // componentDidMount() {
  //   console.log(this.el);
  // }
  // handleFootChange = value => {
  //   console.log(value);
  //   this.setState({
  //     foot: value,
  //     inches: value * 12
  //   });
  // };
  // handleInchChange = value => {
  //   this.setState({
  //     inches: value,
  //     foot: value / 12
  //   });
  // };
  handleInputChange(e) {
    console.log(e);
  }
  handleChange(e) {
    console.log(e);
  }
  handleCreate(inputValue) {
    console.log(inputValue);
    let newOption = this.createNewOption(inputValue);
    this.setState({
      ddOptions: [...this.state.ddOptions, newOption]
    });
  }
  createNewOption(value) {
    return { name: value, value: value };
  }
  // createNewOption = value => {
  //   return { name: value, value: value };
  // };
  render() {
    let { foot, inches } = this.state;
    return (
      <div>
        <CreatableSelect
          isClearable
          classNamePrefix="searchDdd"
          onChange={this.handleChange.bind(this)}
          onInputChange={this.handleInputChange.bind(this)}
          options={this.state.ddOptions}
          onCreateOption={this.handleCreate.bind(this)}
        />
        </div>
        // <FootInches
        //   ref={el => (this.el = el)}
        //   type="foot"
        //   value={foot}
        //   handleChange={this.handleFootChange}
        // />
        // <FootInches
        //   type="inches"
        //   value={inches}
        //   handleChange={this.handleInchChange}
        // />
      //</div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
