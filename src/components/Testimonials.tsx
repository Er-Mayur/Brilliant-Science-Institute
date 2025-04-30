
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Brilliant Science Institute played a crucial role in my JEE success. The faculty's guidance and study materials were exceptional.",
    name: "Rohit Kumar",
    achievement: "JEE Advanced AIR 245",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    content: "The systematic approach and regular tests at Brilliant Science helped me build the confidence to crack NEET in my first attempt.",
    name: "Ananya Singh",
    achievement: "NEET AIR 320",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    content: "From struggling with concepts to scoring 95% in boards, my journey with Brilliant Science has been transformative!",
    name: "Vikram Reddy",
    achievement: "Class 12 - 95%",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    content: "The faculty at Brilliant Science doesn't just teach science, they inspire a love for it. Grateful for their mentorship.",
    name: "Priya Malhotra",
    achievement: "NEET AIR 512",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    content: "The study material and test series provided by Brilliant Science are perfectly aligned with competitive exams patterns.",
    name: "Arjun Nair",
    achievement: "JEE Main 99.2 percentile",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
            Student <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Hear from our students who achieved their academic dreams with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brilliant-blue/20">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-center italic mb-6">"{testimonial.content}"</p>
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-brilliant-purple">{testimonial.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-4">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentPage === index ? 'bg-brilliant-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
