import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const chartData = [
    { month: 'Jan', users: 4000, revenue: 2400 },
    { month: 'Feb', users: 3000, revenue: 1398 },
    { month: 'Mar', users: 2000, revenue: 9800 },
    { month: 'Apr', users: 2780, revenue: 3908 },
    { month: 'May', users: 1890, revenue: 4800 },
    { month: 'Jun', users: 2390, revenue: 3800 },
  ];

  const stats = [
    { label: 'Total Users', value: '24,563', icon: Users, color: 'bg-blue-500' },
    { label: 'Revenue', value: '$45,231', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Growth', value: '23%', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Active Now', value: '1,234', icon: Zap, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-6">
        <h1 className="text-3xl font-bold">Brazil iGaming Dashboard</h1>
        <p className="text-gray-400 mt-2">Real-time market insights and analytics</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Line Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">User Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Revenue Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 p-6 text-center text-gray-400">
        <p>&copy; 2024 Brazil iGaming Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
