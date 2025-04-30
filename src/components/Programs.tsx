
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Calendar, GraduationCap, School } from 'lucide-react';

const programData = [
  {
    id: 1,
    title: 'School Program',
    subtitle: 'Classes 8th - 10th',
    description: 'Comprehensive coaching for science, mathematics, and academic excellence in middle and high school.',
    features: ['Live Classes', 'Regular Tests', 'Study Material', 'Doubt Clearing'],
    icon: School,
    color: 'brilliant-blue'
  },
  {
    id: 2,
    title: 'Higher Secondary',
    subtitle: 'Classes 11th - 12th',
    description: 'In-depth coaching for Physics, Chemistry, Mathematics, and Biology with board exam preparation.',
    features: ['Expert Faculty', 'Focus on Boards', 'Weekly Assignments', 'Performance Reports'],
    icon: Book,
    color: 'brilliant-purple'
  },
  {
    id: 3,
    title: 'JEE Preparation',
    subtitle: 'Engineering Entrance',
    description: 'Specialized training for JEE Main & Advanced with focus on conceptual learning and problem solving.',
    features: ['Extensive Test Series', 'Previous Year Papers', 'Mock Interviews', 'Rank Improvement Program'],
    icon: GraduationCap,
    color: 'brilliant-orange'
  },
  {
    id: 4,
    title: 'NEET Preparation',
    subtitle: 'Medical Entrance',
    description: 'Comprehensive preparation for NEET with specialized faculty for Physics, Chemistry, and Biology.',
    features: ['NCERT Mastery', 'Topic-wise Tests', '24/7 Doubt Support', 'Adaptive Learning'],
    icon: Calendar,
    color: 'brilliant-blue'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
            Our <span className="text-gradient">Academic Programs</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover our specialized programs designed to help students excel in school exams, boards, and competitive entrances like JEE and NEET.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.map((program) => (
            <Card key={program.id} className="border-t-4 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`inline-block p-3 rounded-lg bg-${program.color}/10 mb-4`}>
                  <program.icon className={`h-6 w-6 text-${program.color}`} />
                </div>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription className="text-base font-medium">{program.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`h-1.5 w-1.5 rounded-full bg-${program.color} mr-2`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
