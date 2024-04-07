import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Menu from '../Menu/Menu'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Menu />
    </div>
  )
}

export default Home