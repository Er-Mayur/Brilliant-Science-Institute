
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, FlaskConical, TestTube } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FlaskConical className="mr-2 h-6 w-6 text-brilliant-blue" />
                <span>Send Us A Message</span>
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" placeholder="Your phone" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">Program Interested In</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="class-8-10">Class 8-10</SelectItem>
                          <SelectItem value="class-11-12">Class 11-12</SelectItem>
                          <SelectItem value="jee">JEE Preparation</SelectItem>
                          <SelectItem value="neet">NEET Preparation</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message or query" rows={4} />
                </div>

                <Button className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 lg:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TestTube className="mr-2 h-6 w-6 text-brilliant-purple" />
                <span>Contact Information</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brilliant-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brilliant-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Our Location</h3>
                    <p className="text-gray-600">Brilliant Science Institute Plot no 2 Pankaj Nagar, Chopda, India, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brilliant-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brilliant-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Call Us</h3>
                    <p className="text-gray-600">+91 94050 54723</p>
                    <p className="text-gray-600">+91 92840 60899</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brilliant-orange/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brilliant-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Us</h3>
                    <p className="text-gray-600">info@brilliantscience.edu</p>
                    <p className="text-gray-600">admissions@brilliantscience.edu</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-3">Working Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Monday - Friday:</p>
                      <p className="font-medium">9:00 AM - 7:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">Saturday:</p>
                      <p className="font-medium">9:00 AM - 5:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">Sunday:</p>
                      <p className="font-medium">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
