import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  //context Type connect comp to context obj
  //static means it is for comp itself
  // static contextType = LanguageContext;
  //now we have this.context here
  renderSubmit(language){
    return language === 'english' ? 'submit' : 'voorleggen';
  }
  renderButton(color){
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {({language})=> this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === 'english' ? 'submit' : 'voorleggen';
    // child of consumer is always a func
    return (
        <ColorContext.Consumer>
          {(color)=>this.renderButton(color)}
        </ColorContext.Consumer>
        
    );
  }
}

export default Button;