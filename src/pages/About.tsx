
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, FlaskConical, TestTube, Users } from 'lucide-react';
import student_study from "../assets/images/student_study.png";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 flex items-center">
          <div className="container mx-auto px-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Brilliant Science Institute</span>
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Founded in 2012, Brilliant Science Institute has been dedicated to nurturing future doctors and engineers through specialized education and mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-brilliant-blue/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-brilliant-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">2012</h3>
                <p className="text-gray-600">Founded with a mission to provide quality education for competitive exams.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-brilliant-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <FlaskConical className="h-8 w-8 text-brilliant-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">2015</h3>
                <p className="text-gray-600">Expanded to include state-of-the-art chemistry and physics laboratories.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-brilliant-orange/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <TestTube className="h-8 w-8 text-brilliant-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">2018</h3>
                <p className="text-gray-600">Achieved 95% success rate in medical and engineering entrance exams.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-green-400/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2023</h3>
                <p className="text-gray-600">Expanded to multiple branches with over 5000 student success stories.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our Vision & Mission
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brilliant-blue mb-2">Vision</h3>
                    <p className="text-gray-700">
                      To be the premier institute for medical and engineering aspirants, known for excellence in education, innovation in teaching methodology, and commitment to student success.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brilliant-purple mb-2">Mission</h3>
                    <p className="text-gray-700">
                      To empower students with knowledge, skills, and confidence to excel in medical and engineering entrance exams through specialized coaching, personalized attention, and academic support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src={student_study}
                  alt="Science laboratory with students"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-brilliant-purple/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;