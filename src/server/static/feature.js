import React from 'react'

class feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', project: ''};
  }

  render() {
    return(
        <>
            <button><a href={"/login"}>Login</a></button>
        </>
    )
    }
}