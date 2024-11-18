import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: 'Development',
    description: 'Experienced in both functional and OOP: JavaScript, React, Node.js, Python, and more.'
  },
  {
    icon: <Palette size={24} />,
    title: 'Design',
    description: 'Eye for clean design. Experience with Figma, and modern CSS frameworks.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Problem-Solving',
    description: 'Strong foundation in data structures, algorithms, and system design.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful and functional web applications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}