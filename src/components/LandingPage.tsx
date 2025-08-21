import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sparkles, Users, BarChart3, Brain, Palette } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Chronicle AI</span>
            </div>
            <Link
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Presentations
              <span className="block text-blue-600">That Tell Your Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your ideas into stunning, interactive presentations in minutes. 
              Chronicle AI eliminates the manual work while preserving your brand and narrative.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Create Presentation
            </Link>
            <button className="text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border border-gray-300 hover:border-gray-400">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Presentations
            </h2>
            <p className="text-xl text-gray-600">
              Powered by AI, designed for professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-First Generation</h3>
              <p className="text-gray-600">
                Transform prompts into presentation-ready slides with intelligent content generation and narrative flow.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <Palette className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Alignment</h3>
              <p className="text-gray-600">
                Upload your brand kit and apply consistent styling across all slides with one click.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Hierarchy</h3>
              <p className="text-gray-600">
                Automatic emphasis on key points, charts, and data with intelligent layout optimization.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Collaboration</h3>
              <p className="text-gray-600">
                Work together seamlessly with shared cursors and live editing capabilities.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 hover:shadow-lg transition-all duration-300">
              <Zap className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Commands</h3>
              <p className="text-gray-600">
                Apply changes across all slides instantly with batch editing and global instructions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Elements</h3>
              <p className="text-gray-600">
                Widget-first approach with charts, timelines, and embeds that engage your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Presentations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've already made the switch to AI-powered storytelling.
          </p>
          <Link
            to="/create"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
          >
            Start Creating Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Chronicle AI</span>
            </div>
            <div className="text-sm">
              © 2025 Chronicle AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;