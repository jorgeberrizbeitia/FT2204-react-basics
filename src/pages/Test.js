import Details from "../components/Details"
import DetailsClass from "../components/DetailsClass"
import Message from "../components/Message"
import ReactPlayer from 'react-player'

function Test() {

  const tas = [
    {
      name: "Eva",
      pet: "Rabbit"
    },
    {
      name: "Caro",
      pet: "Dog"
    }
  ]

  return (
    <div>

        <h1>Test de componentes</h1>

        {/* <Details name={tas[0].name} pet={tas[0].pet}/>
        <Details name={tas[1].name} pet={tas[1].pet}/> */}


      <Details ta={tas[0]}/>
      <Details ta={tas[1]}/>

      <DetailsClass ta={tas[0]}/>
      <DetailsClass ta={tas[1]}/>

      <Message num={5}>
        <ul>
          <li>Hola</li>
          <li>Adios</li>
        </ul>
      </Message>

      <Message num={10}>
        Otro mensaje
      </Message>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' control={true}/>

    </div>
  )

}

export default Test