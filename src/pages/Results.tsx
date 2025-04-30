
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const jeeResults = [
  { id: 1, name: "Aditya Sharma", rank: 145, percentile: 99.97, year: 2023, batch: "JEE Advanced" },
  { id: 2, name: "Priya Patel", rank: 256, percentile: 99.92, year: 2023, batch: "JEE Advanced" },
  { id: 3, name: "Rahul Kumar", rank: 312, percentile: 99.87, year: 2023, batch: "JEE Advanced" },
  { id: 4, name: "Ananya Singh", rank: 450, percentile: 99.76, year: 2023, batch: "JEE Advanced" },
  { id: 5, name: "Vikram Choudhary", rank: 520, percentile: 99.71, year: 2023, batch: "JEE Advanced" },
  { id: 6, name: "Neha Gupta", rank: 789, percentile: 99.54, year: 2023, batch: "JEE Advanced" }
];

const neetResults = [
  { id: 1, name: "Shreya Verma", rank: 87, percentile: 99.99, year: 2023, batch: "NEET Special" },
  { id: 2, name: "Arjun Reddy", rank: 134, percentile: 99.98, year: 2023, batch: "NEET Special" },
  { id: 3, name: "Divya Sharma", rank: 243, percentile: 99.96, year: 2023, batch: "NEET Special" },
  { id: 4, name: "Ravi Teja", rank: 378, percentile: 99.92, year: 2023, batch: "NEET Special" },
  { id: 5, name: "Anjali Mehta", rank: 412, percentile: 99.89, year: 2023, batch: "NEET Special" },
  { id: 6, name: "Karan Ahuja", rank: 567, percentile: 99.82, year: 2023, batch: "NEET Special" }
];

const boardResults = [
  { id: 1, name: "Aarav Malhotra", percentage: 98.6, board: "CBSE", year: 2023, batch: "Class 10 Board Prep" },
  { id: 2, name: "Ishita Jain", percentage: 98.2, board: "CBSE", year: 2023, batch: "Class 10 Board Prep" },
  { id: 3, name: "Rohan Agarwal", percentage: 97.8, board: "CBSE", year: 2023, batch: "Class 10 Board Prep" },
  { id: 4, name: "Tanvi Shah", percentage: 97.4, board: "CBSE", year: 2023, batch: "Class 10 Board Prep" },
  { id: 5, name: "Varun Kapoor", percentage: 96.8, board: "ICSE", year: 2023, batch: "Class 10 Board Prep" },
  { id: 6, name: "Meera Desai", percentage: 96.4, board: "ICSE", year: 2023, batch: "Class 10 Board Prep" }
];

const Results = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Our <span className="text-gradient">Results</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our students consistently achieve top ranks in various competitive exams. 
              Here's a glimpse of our recent accomplishments.
            </p>
          </div>
          
          <Tabs defaultValue="jee" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="jee">JEE Results</TabsTrigger>
              <TabsTrigger value="neet">NEET Results</TabsTrigger>
              <TabsTrigger value="board">Board Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="jee">
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableCaption>JEE Advanced 2023 Results</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Rank</TableHead>
                      <TableHead className="text-right">Percentile</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jeeResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.name}</TableCell>
                        <TableCell className="text-right">{result.rank}</TableCell>
                        <TableCell className="text-right">{result.percentile}</TableCell>
                        <TableCell>{result.batch}</TableCell>
                        <TableCell>{result.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="neet">
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableCaption>NEET 2023 Results</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Rank</TableHead>
                      <TableHead className="text-right">Percentile</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {neetResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.name}</TableCell>
                        <TableCell className="text-right">{result.rank}</TableCell>
                        <TableCell className="text-right">{result.percentile}</TableCell>
                        <TableCell>{result.batch}</TableCell>
                        <TableCell>{result.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="board">
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableCaption>Board Exam 2023 Results</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Percentage</TableHead>
                      <TableHead>Board</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {boardResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.name}</TableCell>
                        <TableCell className="text-right">{result.percentage}%</TableCell>
                        <TableCell>{result.board}</TableCell>
                        <TableCell>{result.batch}</TableCell>
                        <TableCell>{result.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
