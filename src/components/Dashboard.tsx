import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter, Users, Calendar, TrendingUp, Clock, Star, MoreHorizontal, Sparkles, Brain, Zap, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const presentations = [
    {
      id: 1,
      title: "Q4 Investor Pitch Deck",
      description: "Series A funding presentation with traction metrics",
      author: "Ananya Sharma",
      lastEdited: "2 hours ago",
      status: "shared",
      collaborators: 3,
      views: 127,
      thumbnail: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pitch"
    },
    {
      id: 2,
      title: "Market Analysis Report",
      description: "Comprehensive fintech market research and insights",
      author: "Rahul Patel", 
      lastEdited: "1 day ago",
      status: "draft",
      collaborators: 1,
      views: 43,
      thumbnail: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "report"
    },
    {
      id: 3,
      title: "Product Roadmap 2025",
      description: "Strategic vision and development timeline",
      author: "Ananya Sharma",
      lastEdited: "3 days ago", 
      status: "published",
      collaborators: 5,
      views: 298,
      thumbnail: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "strategy"
    }
  ];

  const quickStats = [
    { label: "Total Presentations", value: "24", icon: BarChart3, change: "+12%", color: "text-blue-600" },
    { label: "Team Collaborations", value: "8", icon: Users, change: "+23%", color: "text-purple-600" },
    { label: "Total Views", value: "1.2K", icon: TrendingUp, change: "+45%", color: "text-green-600" },
    { label: "Avg. Creation Time", value: "12m", icon: Clock, change: "-35%", color: "text-orange-600" }
  ];

  const recentActivity = [
    { type: "created", user: "Ananya", item: "Investor Pitch Deck", time: "2h ago" },
    { type: "shared", user: "Rahul", item: "Market Analysis", time: "1d ago" },
    { type: "commented", user: "Team", item: "Product Roadmap", time: "2d ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Chronicle AI</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/create"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>New Presentation</span>
              </Link>
              
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ananya! ✨</h1>
          <p className="text-gray-600">Your AI-powered presentations are ready to captivate and convince.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.color} font-medium`}>{stat.change} this month</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search presentations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="pitch">Pitch Decks</option>
                <option value="report">Reports</option>
                <option value="strategy">Strategy</option>
              </select>
            </div>

            {/* AI Suggestions */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Recommendations</h3>
                  <p className="text-gray-600 mb-4">Based on your recent presentations, here are some suggestions:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="bg-white p-3 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-200 text-left group">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900">Update Q4 metrics</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700">Add latest traction data</p>
                    </button>
                    
                    <button className="bg-white p-3 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200 text-left group">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-900">Create team update</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700">Weekly progress deck</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Presentations Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Presentations</h2>
              
              {presentations.map((presentation) => (
                <div key={presentation.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                  <div className="flex items-start space-x-4">
                    <img
                      src={presentation.thumbnail}
                      alt={presentation.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            {presentation.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{presentation.description}</p>
                        </div>
                        
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>By {presentation.author}</span>
                        <span>•</span>
                        <span>{presentation.lastEdited}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          presentation.status === 'published' ? 'bg-green-100 text-green-700' :
                          presentation.status === 'shared' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {presentation.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{presentation.collaborators}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{presentation.views} views</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Link
                            to={`/presentation/${presentation.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                          >
                            View
                          </Link>
                          <Link
                            to="/create"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md font-medium text-sm transition-colors duration-200"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'created' ? 'bg-green-500' :
                      activity.type === 'shared' ? 'bg-blue-500' : 'bg-purple-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.type} <span className="font-medium">{activity.item}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  to="/create"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-center"
                >
                  Create New Deck
                </Link>
                
                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-lg font-medium transition-colors duration-200">
                  Import Slides
                </button>
                
                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-lg font-medium transition-colors duration-200">
                  Browse Templates
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-gray-700">
                Upload your brand kit to maintain consistent styling across all presentations. 
                Chronicle AI will automatically apply your colors, fonts, and logos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;