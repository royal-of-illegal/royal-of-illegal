import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Hacker Secrets</h1>
        <Button variant="outline" className="text-green-400 hover:bg-green-700">Login</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-10">
        <motion.h2
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Hacker's Portfolio
        </motion.h2>
        <p className="text-gray-400 mt-4">
          Discover advanced secrets and projects built with the latest technologies.
        </p>
      </section>

      {/* Secret Projects Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="bg-gray-800 border border-gray-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Secret Project {index + 1}</h3>
              <p className="text-gray-400 mb-4">
                Dive into this advanced project to uncover the secrets behind its implementation.
              </p>
              <Button variant="outline" className="text-green-400 hover:bg-green-700">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Login Section */}
      <section className="mt-16 bg-gray-800 p-6 rounded-2xl shadow-lg mx-auto max-w-md">
        <h3 className="text-2xl font-bold mb-4">Access Secret Page</h3>
        <Input
          type="password"
          placeholder="Enter the secret key"
          className="mb-4 text-black"
        />
        <Button className="w-full bg-green-600 hover:bg-green-800">
          Unlock Secrets
        </Button>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Hacker Secrets. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
