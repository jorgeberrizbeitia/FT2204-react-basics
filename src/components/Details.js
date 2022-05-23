function Details(props) {

  console.log(props)
  // const { name, pet } = props
  const { name, pet } = props.ta

  return (
    <div>
      <h3>Detalles de TA</h3>
      <p>name: {name}</p>
      <p>pet: {pet}</p>
    </div>
  )

}

export default Details