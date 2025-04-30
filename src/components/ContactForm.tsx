
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Have questions or want to join Brilliant Science Institute? Reach out to us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
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
                    <label htmlFor="course" className="text-sm font-medium">Program Interested In</label>
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
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brilliant-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brilliant-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Our Location</h4>
                    <p className="text-gray-600">123 Education Street, Knowledge City, India - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brilliant-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brilliant-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Call Us</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brilliant-orange/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brilliant-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email Us</h4>
                    <p className="text-gray-600">info@brilliantscience.edu</p>
                    <p className="text-gray-600">admissions@brilliantscience.edu</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3">Working Hours</h4>
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
