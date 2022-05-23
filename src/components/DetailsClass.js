import React from "react"

class DetailsClass extends React.Component {

  render() {

    console.log(this.props)
    const {name, pet} = this.props.ta

    return (
      <div>
        <h3>Detalles de TA</h3>
        <p>name: {name}</p>
        <p>pet: {pet}</p>
      </div>
    );
  }
}

export default DetailsClass;
