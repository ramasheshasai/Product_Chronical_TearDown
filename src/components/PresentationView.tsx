import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw, Share2, Download, Eye, Users, Clock, Maximize, ChevronLeft, ChevronRight, Home, Sparkles } from 'lucide-react';

const PresentationView = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const presentation = {
    id: 1,
    title: "Q4 Investor Pitch Deck",
    author: "Ananya Sharma",
    views: 127,
    duration: "12 min",
    slides: [
      {
        id: 1,
        title: "Chronicle AI",
        subtitle: "Revolutionizing Presentation Creation with AI",
        content: "The future of storytelling is here",
        type: "title",
        notes: "Opening slide - establish the brand and vision immediately. Keep energy high.",
        background: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
      },
      {
        id: 2,
        title: "The Problem",
        content: "Creating professional presentations is time-consuming, manual, and often results in generic, poorly-designed decks that fail to engage audiences.",
        bulletPoints: [
          "73% of professionals spend 2+ hours on each presentation",
          "Generic templates don't reflect brand identity", 
          "Poor visual hierarchy confuses audiences",
          "Manual formatting kills creativity and focus"
        ],
        type: "problem",
        notes: "Pain point is universal - everyone in the room has felt this frustration. Make it personal.",
        background: "bg-gradient-to-br from-red-50 to-pink-50"
      },
      {
        id: 3,
        title: "Market Opportunity",
        content: "The presentation software market represents a massive, underserved opportunity.",
        metrics: [
          { label: "Market Size", value: "$2.3B", growth: "+8.9% annually" },
          { label: "Target Users", value: "45M+", growth: "Professionals worldwide" },
          { label: "Time Spent", value: "2.5hrs", growth: "Average per deck" },
          { label: "Satisfaction", value: "23%", growth: "With current tools" }
        ],
        type: "market",
        notes: "Large market with clear dissatisfaction = opportunity. Emphasize the growth potential.",
        background: "bg-gradient-to-br from-green-50 to-emerald-50"
      },
      {
        id: 4,
        title: "Our Solution",
        content: "Chronicle AI transforms presentation creation through intelligent automation and brand-aware design.",
        features: [
          {
            title: "AI-First Generation",
            description: "From prompt to polished deck in minutes",
            icon: "🧠"
          },
          {
            title: "Brand Intelligence",
            description: "Automatically applies your brand identity",
            icon: "🎨"
          },
          {
            title: "Smart Hierarchy", 
            description: "Emphasizes key points and data",
            icon: "📊"
          },
          {
            title: "Global Commands",
            description: "Batch edit across entire presentations",
            icon: "⚡"
          }
        ],
        type: "solution",
        notes: "Core value props - speed, quality, brand consistency. This is what makes us different.",
        background: "bg-gradient-to-br from-blue-50 to-indigo-50"
      },
      {
        id: 5,
        title: "Traction & Success",
        content: "Strong early adoption validates product-market fit and growth potential.",
        achievements: [
          { metric: "100K+", label: "Users on waitlist", icon: "👥" },
          { metric: "95%", label: "User satisfaction", icon: "⭐" },
          { metric: "50%", label: "Time savings achieved", icon: "⏰" },
          { metric: "10x", label: "Faster than competitors", icon: "🚀" }
        ],
        type: "traction",
        notes: "Social proof and momentum. These numbers show we're solving a real problem.",
        background: "bg-gradient-to-br from-purple-50 to-pink-50"
      },
      {
        id: 6,
        title: "The Ask",
        content: "Join us in revolutionizing how the world creates and shares ideas.",
        ask: {
          amount: "$5M Series A",
          usage: [
            "Product development & AI enhancement",
            "Team expansion (15+ hires)",
            "Sales & marketing acceleration", 
            "Enterprise partnership development"
          ],
          timeline: "18-month runway to Series B"
        },
        type: "ask",
        notes: "Clear, specific ask with concrete milestones. Show confidence in the plan.",
        background: "bg-gradient-to-br from-yellow-50 to-orange-50"
      }
    ]
  };

  const currentSlideData = presentation.slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < presentation.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case 'title':
        return (
          <div className="text-center text-white">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-6xl font-bold mb-4">{currentSlideData.title}</h1>
              <h2 className="text-2xl font-light opacity-90 mb-8">{currentSlideData.subtitle}</h2>
              <p className="text-xl opacity-80">{currentSlideData.content}</p>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">{currentSlideData.content}</p>
            <div className="space-y-6">
              {currentSlideData.bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market':
        return (
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700 mb-12">{currentSlideData.content}</p>
            <div className="grid grid-cols-2 gap-8">
              {currentSlideData.metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.growth}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700 mb-12">{currentSlideData.content}</p>
            <div className="grid grid-cols-2 gap-6">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'traction':
        return (
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700 mb-12">{currentSlideData.content}</p>
            <div className="grid grid-cols-2 gap-8">
              {currentSlideData.achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-4">{achievement.icon}</div>
                  <div className="text-5xl font-bold text-purple-600 mb-3">{achievement.metric}</div>
                  <div className="text-lg text-gray-700">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700 mb-12">{currentSlideData.content}</p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 max-w-2xl mx-auto">
              <div className="text-4xl font-bold text-orange-600 mb-6">{currentSlideData.ask.amount}</div>
              
              <div className="space-y-4 mb-6">
                {currentSlideData.ask.usage.map((usage, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-gray-800">{usage}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-gray-600 border-t pt-4">
                {currentSlideData.ask.timeline}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h1>
            <p className="text-xl text-gray-700">{currentSlideData.content}</p>
          </div>
        );
    }
  };

  if (isFullscreen) {
    return (
      <div className="h-screen flex flex-col bg-black">
        <div className={`flex-1 flex items-center justify-center p-16 ${currentSlideData.background || 'bg-white'}`}>
          {renderSlideContent()}
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 px-6 py-3 rounded-full">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className="text-white font-medium">
            {currentSlide + 1} / {presentation.slides.length}
          </span>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === presentation.slides.length - 1}
            className="text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <button
          onClick={toggleFullscreen}
          className="absolute top-8 right-8 text-white/70 hover:text-white"
        >
          <Home className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              
              <div className="hidden md:block h-6 w-px bg-gray-300"></div>
              
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{presentation.title}</h1>
                <p className="text-sm text-gray-600">by {presentation.author}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{presentation.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{presentation.duration}</span>
                </div>
              </div>
              
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
              >
                <Maximize className="w-4 h-4" />
                <span>Present</span>
              </button>

              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Slide Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Slides ({presentation.slides.length})</h3>
              <div className="space-y-2">
                {presentation.slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                      currentSlide === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        currentSlide === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{slide.title}</h4>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{slide.content}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Slide Display */}
              <div className={`aspect-video p-12 ${currentSlideData.background || 'bg-white'}`}>
                {renderSlideContent()}
              </div>

              {/* Controls */}
              <div className="bg-gray-50 border-t border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <span className="text-sm font-medium text-gray-600">
                      {currentSlide + 1} of {presentation.slides.length}
                    </span>

                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === presentation.slides.length - 1}
                      className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowNotes(!showNotes)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        showNotes 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Notes
                    </button>
                  </div>
                </div>
              </div>

              {/* Speaker Notes */}
              {showNotes && (
                <div className="bg-yellow-50 border-t border-yellow-200 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Speaker Notes</h4>
                  <p className="text-gray-700 leading-relaxed">{currentSlideData.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationView;