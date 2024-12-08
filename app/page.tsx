import React from 'react'
// import Header from './Components/Header'
import MainHeader from './Components/MainHeader'
import AppBanner from './Components/anothrtHeader'
import ShoeBanner from './Components/Shoe'
import BestAir from './Components/BestAir'
import Featur from './Components/Featur'
import GearUp from './Components/GearUp'
import FlightEssentials from './Components/Flight'
import Essentials from './Components/Es'
import EsAfter from './Components/EsAfter'
import AirNike from './Components/airNike'
import Help from './Help/page'
import Login from './Components/Login'
// import FIRST from './Components/AllProduct'
import JoinUS from './JoinUs/page'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <MainHeader/>
      <AppBanner/>
      <ShoeBanner/>
      <BestAir/>
      <Featur/>
      <GearUp/>
      <FlightEssentials/>
      <Essentials/>
      <EsAfter/>
      <AirNike/>
      <Login/>
      <Help/>
      {/* <FIRST/> */}
      <JoinUS/>
    </div>
  )
}

export default Home
