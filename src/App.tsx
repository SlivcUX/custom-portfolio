import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TabButton from './components/TabButton';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-6 z-50 flex justify-center mb-8">
          <div className="flex gap-1 bg-white/5 backdrop-blur-lg p-1.5 rounded-2xl border border-white/10 shadow-xl">
            <TabButton label="Home" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <TabButton label="About" isActive={activeTab === 'about'} onClick={() => setActiveTab('about')} />
            <TabButton label="Active Projects" isActive={activeTab === 'active projects'} onClick={() => setActiveTab('active projects')} />
            <TabButton label="Projects" isActive={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
            <TabButton label="Contact" isActive={activeTab === 'contact'} onClick={() => setActiveTab('contact')} />
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-20">
          {/* Home Tab */}
          <div className={`transition-all duration-500 ${activeTab === 'home' ? 'block' : 'hidden'}`}>
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-bold animate-fade-in tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                      SlivcUX
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 animate-fade-in-delay font-light">
                    Self-taught Developer & C++/C# Enthusiast
                  </p>
                </div>
                <div className="flex gap-8 justify-center animate-fade-in-delay-2">
                  <a href="https://github.com" className="hover:text-blue-400 transition-all transform hover:scale-110">
                    <Github className="w-7 h-7" />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-purple-400 transition-all transform hover:scale-110">
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a href="mailto:contact@slivcux.dev" className="hover:text-emerald-400 transition-all transform hover:scale-110">
                    <Mail className="w-7 h-7" />
                  </a>
                </div>
                <div className="animate-bounce mt-16">
                  <ChevronDown className="w-6 h-6 mx-auto text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* About Tab */}
          <div className={`transition-all duration-500 ${activeTab === 'about' ? 'block' : 'hidden'}`}>
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">About Me</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate developer with about 2 years of experience building C++/C# applications.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When I'm not coding, you'll probably find me contributing to open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Projects Tab */}
          <div className={`transition-all duration-500 ${activeTab === 'active projects' ? 'block' : 'hidden'}`}>
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">Active Projects</h2>
                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                  {/* <ProjectCard
                    title="Game Modification"
                    description="I develop custom toolkits designed to provide a advantage in titles such as Counter-Strike 2, Call of Duty, and Apex Legends. These tools leverage vulnerable drivers and program overlays to render in-game data like player stats, health, and more, providing players with a competitive edge."
                    image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670"
                    tags={['C++', 'C#', 'DirectX', 'OpenGL', 'ImGui']}
                    link="https://github.com"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Tab */}
          <div className={`transition-all duration-500 ${activeTab === 'projects' ? 'block' : 'hidden'}`}>
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">Featured Projects</h2>
                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                  {/* <ProjectCard
                    title="Game Modification"
                    description="I develop custom toolkits designed to provide a advantage in titles such as Counter-Strike 2, Call of Duty, and Apex Legends. These tools leverage vulnerable drivers and program overlays to render in-game data like player stats, health, and more, providing players with a competitive edge."
                    image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670"
                    tags={['C++', 'C#', 'DirectX', 'OpenGL', 'ImGui']}
                    link="https://github.com"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Tab */}
          <div className={`transition-all duration-500 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="max-w-xl mx-auto text-center">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Get in Touch</h2>
                  <p className="text-gray-300 text-lg mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                  </p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Contact Me
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full text-center py-4 text-gray-500 bg-gradient-to-t from-[#0A0A0B] to-transparent">
          <p>© 2024 SlivcUX. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;