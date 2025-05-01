import AddressMap from '@/components/AddressMap'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-blue-50 to-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                    Get In <span className="text-gradient">Touch</span>
                                </h1>
                                <p className="text-gray-700 text-lg mb-6">
                                    Have questions about our programs for aspiring doctors and engineers? Want to know more about our specialized chemistry coaching? We're here to help!
                                </p>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                                    alt="Chemistry laboratory"
                                    className="rounded-lg shadow-xl"
                                />
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brilliant-blue/10 rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm/>
                <AddressMap />
            </main>

            <Footer />
        </div>
    )
}

export default Contact