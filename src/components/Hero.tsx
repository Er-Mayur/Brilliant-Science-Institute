
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 pt-24 lg:pt-32">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6">
              Unlock Your <span className="text-gradient">Academic Potential</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-700">
              Brilliant Science Institute provides expert coaching for Classes 8-12 and competitive exams like NEET & JEE. Join us for academic excellence and guaranteed success.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-brilliant-blue hover:bg-brilliant-blue-dark text-lg py-6 px-8">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-brilliant-blue text-brilliant-blue hover:bg-brilliant-blue/10 text-lg py-6 px-8">
                Book Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-brilliant-blue">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-brilliant-blue">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-brilliant-blue">500+</p>
                <p className="text-gray-600">Top Ranks</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Students learning at Brilliant Science Institute"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brilliant-purple/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-brilliant-blue/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
