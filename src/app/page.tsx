import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'

const Home  = () => {
  return (
    <div>
<Header/>
      <main className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center text-white" 
              style={{ backgroundImage: "url('/bg.jpg')" }}> 
      
       <Hero/>
      
      </main>
      <Footer/>
     </div>
  )
}

export default Home
