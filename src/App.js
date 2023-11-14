
import './App.css';
import Cars from "./components/Cars";
import "./styles/columns.css"
import Sedan from "./images/icon-sedans.svg";
import Suvs from "./images/icon-suvs.svg";
import Luxury from "./images/icon-luxury.svg";







function App() {
  const cars = [
    {
      id: 1,
      image: Sedan,
      name: "sedan",
      info: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip"
    },
    {
      id: 2,
      image: Suvs,
      name: "SUV",
      info: "Take an SUV for its spacious interior, power, and versitily. Perfect for your next family vaction and off-raod adventures"
    },
  
    {
      id: 3,
      image: Luxury,
      name: "Luxury",
      info: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style"
    },
  ]


  const [sedan, suv, luxury] = cars;


  return (
    <div className="App">
  

        <div className='sedan'>
          <Cars {...sedan} />
        </div>
        <div className='suv'>
          <Cars {...suv} />
        </div>
        <div className='luxury'>
          <Cars {...luxury} />
        </div>
      
    </div>
  );
}

export default App;
