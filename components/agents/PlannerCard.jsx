'use client';

import { useState } from 'react';
import { Calendar, Target, TrendingUp, Clock } from 'lucide-react';
import AgentChatShell from './AgentChatShell';

export default function PlannerCard() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <AgentChatShell
        agentType="planner"
        agentName="Planer"
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Calendar className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Planer</h3>
          <p className="text-sm text-gray-600">Osobni planer učenja</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6">
        Kreiraj personalizirane planove učenja, prati napredak i optimiziraj svoje vrijeme za maturu.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Ciljevi</p>
          <p className="text-xs text-gray-600">Postavi i prati ciljeve</p>
        </div>
        <div className="text-center">
          <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Napredak</p>
          <p className="text-xs text-gray-600">Prati svoj razvoj</p>
        </div>
      </div>

      <button
        onClick={() => setShowChat(true)}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Započni planiranje
      </button>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <Clock className="w-4 h-4 inline mr-1" />
        AI-powered planer učenja
      </div>
    </div>
  );
}