import React, { Component } from "react";
import InsertText from "../components/InsertText";
import ReverseText from "../components/ReverseText";
import ToUpperText from "../components/ToUpperText";
import LargerText from "../components/LargerText";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="container-fluid ">
            <h1 className="header-text">Keko Box project</h1>
            <div className="row justify-content-md-center">
              <div className="col-4 text-bar">
                <InsertText
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  value={this.state.text}
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <h4 className="description-text badge-danger rounded">Reverse Text Box</h4>
                  <ReverseText text={this.state.text} />
                  <h4 className="description-text badge-success rounded">To Upper Case Text Box</h4>
                  <ToUpperText text={this.state.text} />
                  <h4 className="description-text badge-warning rounded">Larger Text Box</h4>
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
