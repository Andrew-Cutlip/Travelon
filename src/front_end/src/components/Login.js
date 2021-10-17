import React from "react";
import ReactDOM from "react-dom";
import 'style.css';
import './LoginForm';
import './RegistrationForm'

ReactDOM.render(
  <React.StrictMode>
      <div className="g-signin">
          <login />
      </div>
  </React.StrictMode>,
    document.getElementById('root')
);