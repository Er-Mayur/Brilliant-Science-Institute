import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24">
                <ContactForm />
            </main>

            <Footer />
        </div>
    )
}

export default Contact