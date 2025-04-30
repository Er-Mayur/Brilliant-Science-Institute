
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header/>
      
      <main className="flex-grow pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Manage Batches</h2>
            <p className="text-gray-600 mb-4">Create, edit, update batches and manage student data</p>
            <Button className="w-full bg-brilliant-blue">Access</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Results</h2>
            <p className="text-gray-600 mb-4">Create and manage results for each batch</p>
            <Button className="w-full bg-brilliant-blue">Access</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Faculty Management</h2>
            <p className="text-gray-600 mb-4">Manage faculty information and details</p>
            <Button className="w-full bg-brilliant-blue">Access</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Contact Form Submissions</h2>
            <p className="text-gray-600 mb-4">View and manage contact form submissions</p>
            <Button className="w-full bg-brilliant-blue">Access</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Student Success Stories</h2>
            <p className="text-gray-600 mb-4">Manage student success stories displayed on the website</p>
            <Button className="w-full bg-brilliant-blue">Access</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;