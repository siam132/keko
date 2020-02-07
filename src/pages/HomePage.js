import React, { Component } from "react";
import InsertText from "../components/InsertText";
import ReverseText from "../components/ReverseText";
import ToUpperText from "../components/ToUpperText";
import LargerText from "../components/LargerText";
import isLoading from "../components/isLoading";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //loading screen switcher
    this.setState({
      loading: false
    });
  }

  handleChange(event) {
    // handle keypress
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    //Render Main page

    if (this.state.loading)
      return (
        <div className="container-fluid">
          <isLoading />
        </div>
      );
    //Conditional Rendering
    else
      return (
        <div>
          <div className="App">
            <header className="container-fluid ">
              <h1 className="header-text">Keko Box project 💻 </h1>
              <div className="row px-5 justify-content-center">
                <div className="col p-3 justify-content-center col-md-6 col-sm-6 text-bar">
                  <h4 className="description-text">Insert Text</h4>
                  <InsertText //Insert Text component Passing function reference and text state value
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.text}
                  />
                </div>
                <div className="col justify-content-center col-md-6 col-sm-6">
                  <div className="row">
                    <h4 className="description-text px-2 badge-warning rounded">
                      Reverse Text Box
                    </h4>
                    <ReverseText text={this.state.text} />
                    <h4 className="description-text px-2 badge-warning rounded">
                      To Upper Case Text Box
                    </h4>
                    <ToUpperText text={this.state.text} />
                    <h4 className="description-text px-2 badge-warning rounded">
                      Larger Text Box
                    </h4>
                    <LargerText text={this.state.text} />
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      );
  }
}
