import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  //context Type connect comp to context obj
  //static means it is for comp itself
  static contextType = LanguageContext;
  //now we have this.context here
  render() {
    const text = this.context === 'english' ? 'submit' : 'voorleggen';
    return (
      <button className="ui primary button">{text}</button>
    );
  }
}

export default Button;