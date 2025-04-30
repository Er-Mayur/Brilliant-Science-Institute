
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button type="submit" className="w-full bg-brilliant-blue hover:bg-brilliant-blue-dark">
                    Login
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 text-center">
                <div className="text-sm">
                  <a href="#" className="text-brilliant-blue hover:underline">Forgot password?</a>
                </div>
                <div className="text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-brilliant-purple hover:underline">
                    Register
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
