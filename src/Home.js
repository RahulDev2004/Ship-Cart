import React from 'react'
import ecom1 from "./Assets/ecom1.png"
import "./Home.css"
import Product from './Product'
import Dress from "./Assets/dress.png"
import Watch from "./Assets/Watch.png"
import Phone from "./Assets/phone.png"
import Laptop from "./Assets/Laptop.png"
import Aurdino from "./Assets/Aurdino.png"
import Rasberry from "./Assets/Rasberry.png"
import Lollipop from "./Assets/Lollipop.png"

const Home = () => {
  return (
    <div className='home'>
    <div className='home-Container'>
        <img className='home-image' src={ecom1} alt='ecom1'/>
    </div>

    <div className='home-row'>
    <Product title="The Besty Outfit ever" price={29.99} image={Dress} rating={5} />
    <Product title="Smart Watch" price={99.99} image={Watch} rating={5} />
    </div>

    <div className='home-row'>
    <Product title="apple i Phone" price={59} image={Phone} rating={4}/>
    <Product title="Lenove Laptop" price={79} image={Laptop} rating={4}/>
    <Product title="Aurdiono uno R3" price={79} image={Aurdino} rating={4}/>
    </div>

    <div className='home-row'>
    <Product title="Raspberry Pi 4 1.5GHz Quad-Core" price={79} image={Rasberry} rating={4} />
    <Product title="Colorful Rainbow Lollipop" price={5} image={Lollipop} rating={4} />
    </div>
  </div>
  )
}

export default Home