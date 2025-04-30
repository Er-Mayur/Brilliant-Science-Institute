
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const advantages = [
    'Expert faculty with years of teaching experience',
    'Limited batch size for personalized attention',
    'Regular tests and performance tracking',
    'State-of-the-art digital classrooms',
    'Comprehensive study material and resources',
    'Special doubt clearing sessions'
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="About Brilliant Science Institute"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-brilliant-purple/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brilliant-blue/10 rounded-full -z-10"></div>
            
            <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs">
              <div className="flex items-center">
                <div className="bg-brilliant-orange/20 rounded-full p-2 mr-3">
                  <span className="text-brilliant-orange-dark font-bold text-xl">10+</span>
                </div>
                <p className="text-sm text-gray-700">Years of excellence in education</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-6">
              About <span className="text-gradient">Brilliant Science</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-6">
              Founded with a vision to provide quality education, Brilliant Science Institute has been nurturing young minds and helping them achieve academic excellence since 2012.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our methodology focuses on conceptual clarity, problem-solving skills, and exam-oriented preparation that helps students excel in both school examinations and competitive entrances like NEET and JEE.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brilliant-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-brilliant-blue hover:bg-brilliant-blue-dark">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
