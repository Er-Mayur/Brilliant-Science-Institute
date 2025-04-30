import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const About = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      </main>
      
      <Footer />
    </div>
  )
}

export default About
