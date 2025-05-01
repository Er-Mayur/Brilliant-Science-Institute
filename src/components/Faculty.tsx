import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import bkmahajan from '@/assets/images/bkmahajan.jpeg';
import ydpatil from '@/assets/images/ydpatil.jpeg';

const facultyMembers = [
  {
    id: 1,
    name: 'Prof. B. K. Mahajan',
    position: 'Chemmistry Expert',
    experience: '15+ years',
    education: 'M.Sc. in Physical Chemistry',
    expert: 'In NEET Physical Chemistry',
    image: bkmahajan,
  },
  {
    id: 2,
    name: 'Prof. Y. D. Patil',
    position: 'Chemistry Expert',
    experience: '12+ years',
    education: 'M.Sc. in Chemistry',
    expert: 'Specialist in Organic Chemistry',
    image: ydpatil,
  },
  // Add more members as needed
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
          Meet Our <span className="text-gradient">Expert Faculty</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
          Learn from experienced educators who are passionate about teaching and dedicated to student success.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {facultyMembers.map((faculty) => (
            <Card
              key={faculty.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-xs"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
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
                  <p><span className="font-medium">Expertise:</span> {faculty.expert}</p>
                </div>
              </CardContent>
              {/* <CardFooter className="pt-0 flex justify-center">
                <a
                  href="#"
                  className="text-brilliant-blue text-sm font-medium flex items-center hover:underline"
                >
                  View Profile
                </a>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
