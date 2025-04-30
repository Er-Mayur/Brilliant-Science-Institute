
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const batches = [
  {
    id: 1,
    title: "Class 8 Foundation",
    description: "Strong foundation course for Class 8 students to prepare for future competitive exams.",
    subjects: "Mathematics, Science",
    duration: "1 Year",
    startDate: "June 15, 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    title: "Class 9 Foundation",
    description: "Comprehensive course for Class 9 students focusing on building strong concepts.",
    subjects: "Mathematics, Physics, Chemistry, Biology",
    duration: "1 Year",
    startDate: "June 20, 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 3,
    title: "Class 10 Board Prep",
    description: "Focused preparation for Class 10 board exams with regular tests and assessments.",
    subjects: "Mathematics, Science, Social Studies, English",
    duration: "1 Year",
    startDate: "June 25, 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 4,
    title: "Class 11-12 JEE/NEET",
    description: "Integrated course for Class 11-12 students preparing for JEE/NEET along with boards.",
    subjects: "Physics, Chemistry, Mathematics/Biology",
    duration: "2 Years",
    startDate: "July 1, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 5,
    title: "JEE Advanced",
    description: "Intensive coaching for JEE Advanced aspirants with focus on problem-solving.",
    subjects: "Physics, Chemistry, Mathematics",
    duration: "1 Year",
    startDate: "July 5, 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 6,
    title: "NEET Special",
    description: "Specialized program for NEET aspirants with extensive coverage of NCERT and beyond.",
    subjects: "Physics, Chemistry, Biology",
    duration: "1 Year",
    startDate: "July 10, 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
];

const Batches = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Our <span className="text-gradient">Batches</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Join our specialized batches designed for different classes and competitive exams. 
              Our structured curriculum ensures comprehensive coverage and excellent results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batches.map((batch) => (
              <Card key={batch.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={batch.image} 
                    alt={batch.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{batch.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{batch.description}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><span className="font-medium">Subjects:</span> {batch.subjects}</p>
                    <p><span className="font-medium">Duration:</span> {batch.duration}</p>
                    <p><span className="font-medium">Starts:</span> {batch.startDate}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-brilliant-blue hover:bg-brilliant-blue-dark">
                    <Link to={`/register?batch=${batch.id}`}>Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Batches;
