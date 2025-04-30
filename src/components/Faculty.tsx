
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    position: 'Physics Expert',
    experience: '15+ years',
    education: 'Ph.D in Physics, IIT Delhi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    position: 'Chemistry Expert',
    experience: '12+ years',
    education: 'Ph.D in Chemistry, Delhi University',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    name: 'Prof. Amit Verma',
    position: 'Mathematics Expert',
    experience: '10+ years',
    education: 'M.Sc in Mathematics, IISc',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    name: 'Dr. Meera Reddy',
    position: 'Biology Expert',
    experience: '14+ years',
    education: 'Ph.D in Molecular Biology, AIIMS',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
            Meet Our <span className="text-gradient">Expert Faculty</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Learn from experienced educators who are passionate about teaching and dedicated to student success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty) => (
            <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{faculty.name}</h3>
                <p className="text-brilliant-purple font-medium">{faculty.position}</p>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Experience:</span> {faculty.experience}</p>
                  <p><span className="font-medium">Education:</span> {faculty.education}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <a 
                  href="#" 
                  className="text-brilliant-blue text-sm font-medium flex items-center hover:underline"
                >
                  View Profile
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
