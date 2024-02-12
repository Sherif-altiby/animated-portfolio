import './index.scss'
import img from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass , setLetterClass] = useState("text-animate")
  const nameArray = [ 'h', 'e', 'r', 'i', 'f' ]
  const jopArray  = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v','e' ,'l', 'o', 'p', 'e', 'r', "."   ];

  useEffect(()=>{
    return ()=>  setTimeout(()=> setLetterClass("text-animate-hover"), 4000)
  }, [])


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass} >  H </span>
          <span className={`${letterClass} _12 `} >  i, </span>
            <br />  
            <span className={`${letterClass} _13 `} >  I </span>
            <span className={`${letterClass} _14 `} >  'm </span>
         <img src={img} alt="logo" />
        <AnimatedLetters letterClass={letterClass}  strArray={nameArray} idx={15} />
         <br />
         <AnimatedLetters letterClass={letterClass}  strArray={jopArray} idx={20} />
         </h1>
         <h2>Frontend developer / Javascript Expert </h2>
         <Link to='/contact' className='flat-btn' > CONTACT ME </Link>
      </div>
      <Logo />
    </div>
  <Loader type='pacman' />
    </>
  )
}

export default Home