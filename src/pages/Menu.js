import arepaImg from "../images/arepa.jpg"
import pabellonImg from "../images/pabellon.jpg"
import tresLechesImg from "../images/tres-leches.jpg"
import Header from "../components/Header"
import FoodCard from "../components/FoodCard"

function Menu() {
  return (
    <>
      
      <Header />

      <div id="menu">
        <h3>Este es el menu principal</h3>

        {/* <div className="card">
          <p>Arepas con queso</p>
          <img src={arepaImg} alt="arepa" width="200px" />
        </div> */}
        <FoodCard name="Arepas con queso" img={arepaImg}/>
        <FoodCard name="Pabellon" img={pabellonImg}/>
        <FoodCard name="Tres Leches" img={tresLechesImg}/>

        {/* <div className="card">
          <p>Pabellon</p>
          <img src={pabellonImg} alt="pabellon" width="200px" />
        </div>

        <div className="card">
          <p>Tres Leches</p>
          <img src={tresLechesImg} alt="tres-leches" width="200px" />
        </div> */}
      </div>
    </>
  );
}

export default Menu
