"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import myPic from '../app/my-pic.jpg';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The F-22 Raptor: Stealth Superiority",
    description: "Exploring the capabilities of America's premier air superiority fighter.",
    image: "/andrew-palmer-iUXbIGj1J1s-unsplash.jpg"
  },
  {
    title: "Eurofighter Typhoon: Europe's Guardian",
    description: "A deep dive into the multinational Eurofighter project.",
    image: "/cibi-chakravarthi-LJOxm6ILgwg-unsplash.jpg"
  },
  {
    title: "Su-57 Felon: Russia's 5th Generation Fighter",
    description: "Analyzing the features of Russia's most advanced fighter jet.",
    image: "/tom-photography-CPWOxjOwWUk-unsplash.jpg"
  },
  {
    title: "F-35 Lightning II: The Versatile Warrior",
    description: "Understanding the multi-role capabilities of the F-35.",
    image: "/timothy-holmes-DXIpirwgP2Q-unsplash.jpg"
  },
  {
    title: "Rafale: France's Multirole Marvel",
    description: "Examining the Dassault Rafale's performance in various missions.",
    image: "/daniel-shapiro-12uNHfvIXms-unsplash.jpg"
  },
  {
    title: "J-20: China's Stealth Fighter",
    description: "Unveiling the mysteries of China's Chengdu J-20.",
    image: "/tom-photography-QCbIzsYZSaQ-unsplash.jpg"
  }
];

const MainPage: React.FC = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* <header className="py-6">
        <nav className="flex justify-center items-center">
          <Link href="/" className="text-xl font-bold ">Khalid Hussain</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header> */}

      <main>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <Image
            src={myPic}
            alt="Khalid Hussain"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className={`text-4xl font-bold mb-2 ${showName ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            Khalid Hussain
          </h1>
          <p className="text-xl text-gray-600">Frontend Developer</p>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['Next.js', 'React', 'TypeScript', 'Web 3.0', 'AI'].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-blue-500 p-2 rounded text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-green-900 p-4 rounded shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold">Neuros.AI</h3>
              <p>AI based services provider</p>
            </motion.div>
            <motion.div
              className="bg-green-900 p-4 rounded shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold">Alpha Trades</h3>
              <p>A Shipping company</p>
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Fighter Jet Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                className="bg-purple-600 rounded-black-900 shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-black-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-600">
        <p>&copy; 2024 Khalid Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;