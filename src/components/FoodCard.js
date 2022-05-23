

// function FoodCard({ name, img }) {
function FoodCard(props) {

  const { name, img } = props

  return (
    <div className="card">
      <p>{name}</p>
      <img src={img} alt={name} width="200px" />
    </div>
  )

}

export default FoodCard