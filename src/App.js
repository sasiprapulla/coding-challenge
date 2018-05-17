import React, { Component } from 'react';
import FormStep1 from './components/form-step-1/step-1';
import FormStep2 from './components/form-step-2/step-2';
import FormView from './components/view-form/form-view'
import './App.css';


class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    isStep1: true,
    isFormSubmitted: false
  }

  onFormChange = (fieldName, field) => {
    this.setState({
      [fieldName]: field.target.value
    });
  }

  onButtonClick = () => {
    const { isStep1 } = this.state;
    if (isStep1) {
      this.setState({
        isStep1: false,
      })
    }
    else {
      this.setState({
        isFormSubmitted: true,
      })
    }
  }

  render() {

    const {
      isStep1,
      isFormSubmitted
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coding Challenge</h1>
        </header>
        {!isFormSubmitted && <form>
          {isStep1 && <FormStep1 onChange={this.onFormChange} />}
          {!isStep1 && <FormStep2 onChange={this.onFormChange} />}
          <button type="button" onClick={this.onButtonClick}>{isStep1 ? 'Next': 'Submit'}</button>
        </form>}
        {
          isFormSubmitted && <FormView formFields={this.state} />
        }
      </div>
    );
  }
}

export default App;
