import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Faculty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Faculty</h1>
      </main>
      
      <Footer />
    </div>
  )
}

export default Faculty