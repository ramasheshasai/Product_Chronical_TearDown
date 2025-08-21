import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Sparkles, Brain, Palette, Zap, MoreHorizontal, Play, Download, Share2, Eye, Settings, Plus, ChevronDown, Lightbulb, Target, Briefcase, Users, BarChart3, MessageSquare, Clock, Save } from 'lucide-react';

const PresentationBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    objective: 'pitch',
    tone: 'persuasive',
    audience: '',
    keyPoints: '',
    detailLevel: 3,
    brandKit: null,
    outline: ''
  });

  const [showPromptSuggestions, setShowPromptSuggestions] = useState(false);
  const [slides, setSlides] = useState([]);

  const objectives = [
    { value: 'pitch', label: 'Pitch Deck', icon: Target, description: 'Investor presentation or business proposal' },
    { value: 'report', label: 'Business Report', icon: BarChart3, description: 'Analysis, insights, and data presentation' },
    { value: 'update', label: 'Team Update', icon: Users, description: 'Progress updates and team communication' },
    { value: 'strategy', label: 'Strategic Presentation', icon: Briefcase, description: 'Vision, roadmap, and planning' }
  ];

  const tones = [
    { value: 'formal', label: 'Formal', emoji: '👔', description: 'Professional and structured' },
    { value: 'persuasive', label: 'Persuasive', emoji: '🎯', description: 'Compelling and convincing' },
    { value: 'casual', label: 'Casual', emoji: '💬', description: 'Friendly and conversational' },
    { value: 'storytelling', label: 'Storytelling', emoji: '📖', description: 'Narrative-driven approach' }
  ];

  const promptSuggestions = [
    { text: "Make this slide more persuasive", icon: Target },
    { text: "Add supporting data points", icon: BarChart3 },
    { text: "Simplify the message", icon: Lightbulb },
    { text: "Emphasize key benefits", icon: Sparkles },
    { text: "Improve visual hierarchy", icon: Eye },
    { text: "Add call to action", icon: Zap }
  ];

  const generateSlides = () => {
    // Simulate AI generation based on form data
    const mockSlides = [
      {
        id: 1,
        title: "Problem Statement",
        content: "Traditional presentation tools are time-consuming and produce generic results.",
        type: "text",
        notes: "Start with the core problem your audience faces"
      },
      {
        id: 2,
        title: "Market Opportunity",
        content: "The presentation software market is worth $2.3B and growing 8.9% annually.",
        type: "chart",
        notes: "Showcase the size of the opportunity"
      },
      {
        id: 3,
        title: "Our Solution",
        content: "Chronicle AI creates beautiful, branded presentations in minutes using advanced AI.",
        type: "feature",
        notes: "Present your unique value proposition"
      },
      {
        id: 4,
        title: "Traction Metrics",
        content: "100K+ users, 95% satisfaction rate, 50% time savings achieved.",
        type: "metrics",
        notes: "Show concrete proof of success"
      },
      {
        id: 5,
        title: "The Ask",
        content: "Seeking $5M Series A to accelerate growth and product development.",
        type: "cta",
        notes: "Clear, specific call to action"
      }
    ];
    
    setSlides(mockSlides);
    setCurrentStep(3);
  };

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Chronicle AI</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Presentation ✨</h1>
            <p className="text-xl text-gray-600">Tell us about your presentation and our AI will create a polished deck in minutes.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="space-y-8">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presentation Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Q4 Investor Pitch Deck"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Objective */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What's the objective of this presentation? 🎯
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((obj) => (
                    <button
                      key={obj.value}
                      onClick={() => setFormData({ ...formData, objective: obj.value })}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.objective === obj.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <obj.icon className={`w-6 h-6 ${formData.objective === obj.value ? 'text-blue-600' : 'text-gray-600'}`} />
                        <span className="font-medium text-gray-900">{obj.label}</span>
                      </div>
                      <p className="text-sm text-gray-600">{obj.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What tone should we use? 🎭
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tones.map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => setFormData({ ...formData, tone: tone.value })}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                        formData.tone === tone.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="text-2xl mb-2">{tone.emoji}</div>
                      <div className="font-medium text-gray-900 mb-1">{tone.label}</div>
                      <div className="text-xs text-gray-600">{tone.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key points or outline (optional)
                </label>
                <textarea
                  value={formData.keyPoints}
                  onChange={(e) => setFormData({ ...formData, keyPoints: e.target.value })}
                  placeholder="• Problem we're solving&#10;• Our unique solution&#10;• Market size and opportunity&#10;• Traction and metrics&#10;• Ask and next steps"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Detail Level Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How detailed should the presentation be? 📊
                </label>
                <div className="px-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={formData.detailLevel}
                    onChange={(e) => setFormData({ ...formData, detailLevel: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>Brief (5-8 slides)</span>
                    <span>Standard (10-15 slides)</span>
                    <span>Detailed (20+ slides)</span>
                  </div>
                  <p className="text-center text-sm text-blue-600 font-medium mt-2">
                    {formData.detailLevel <= 2 ? 'Brief overview' : 
                     formData.detailLevel >= 4 ? 'Comprehensive deep-dive' : 'Balanced presentation'}
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <div className="pt-6">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.title}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                  Continue to Brand Setup →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <button 
                onClick={() => setCurrentStep(1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Chronicle AI</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand & Assets 🎨</h1>
            <p className="text-xl text-gray-600">Upload your brand kit for consistent styling, or skip to use our beautiful defaults.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="space-y-8">
              {/* Brand Kit Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Brand Kit (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors duration-200">
                  <Palette className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Upload Your Brand Assets</p>
                  <p className="text-gray-600 mb-4">Colors, fonts, logos, and templates</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Choose Files
                  </button>
                </div>
              </div>

              {/* Quick Brand Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Or choose a style preset
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50 transition-all duration-200">
                    <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded mb-3"></div>
                    <span className="font-medium text-gray-900">Professional Blue</span>
                  </button>
                  
                  <button className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 bg-white transition-all duration-200">
                    <div className="w-full h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-3"></div>
                    <span className="font-medium text-gray-900">Creative Purple</span>
                  </button>
                  
                  <button className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 bg-white transition-all duration-200">
                    <div className="w-full h-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded mb-3"></div>
                    <span className="font-medium text-gray-900">Minimal Dark</span>
                  </button>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience (helps AI tailor the content)
                </label>
                <input
                  type="text"
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  placeholder="e.g., Seed investors, C-level executives, technical team"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Generate Button */}
              <div className="pt-6">
                <button
                  onClick={generateSlides}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Brain className="w-6 h-6" />
                  <span>Generate My Presentation ✨</span>
                </button>
                <p className="text-center text-sm text-gray-600 mt-3">
                  This will take about 30 seconds to create your presentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Chronicle AI</span>
              </div>
              
              <div className="hidden md:block h-6 w-px bg-gray-300"></div>
              
              <h1 className="font-semibold text-gray-900">{formData.title || 'Untitled Presentation'}</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-200">
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Auto-saved</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                <Play className="w-4 h-4" />
                <span>Present</span>
              </button>

              <div className="relative">
                <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Slides Panel */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Slides ({slides.length})</h3>
          </div>

          <div className="space-y-2">
            {slides.map((slide, index) => (
              <div key={slide.id} className="group relative">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all duration-200 cursor-pointer">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded">{index + 1}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{slide.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{slide.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 group">
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600 mx-auto mb-1" />
              <span className="text-xs text-gray-600 group-hover:text-gray-800">Add Slide</span>
            </button>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* Current Slide */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {slides.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 aspect-video p-8 relative">
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="h-full flex flex-col">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">{slides[0]?.title}</h1>
                    <div className="flex-1 flex items-center">
                      <p className="text-xl text-gray-700 leading-relaxed">{slides[0]?.content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Assistance Panel */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span>AI Assistant</span>
                </h3>
                
                <button
                  onClick={() => setShowPromptSuggestions(!showPromptSuggestions)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {showPromptSuggestions ? 'Hide' : 'Show'} Suggestions
                </button>
              </div>

              {showPromptSuggestions && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {promptSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"
                    >
                      <suggestion.icon className="w-4 h-4" />
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Tell AI what to change about this slide..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
                    <Zap className="w-5 h-5" />
                  </button>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                  Apply Global
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationBuilder;