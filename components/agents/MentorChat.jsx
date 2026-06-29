'use client';

import { useState } from 'react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';
import AgentChatShell from './AgentChatShell';

export default function MentorChat() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <AgentChatShell
        agentType="mentor"
        agentName="Mentor"
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-pink-100 p-3 rounded-full">
          <Heart className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Mentor</h3>
          <p className="text-sm text-gray-600">Osobni mentor</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6">
        Dobij motivacijsku podršku, savjete o karijeri i pomoć u postavljanju ciljeva za svoju budućnost.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <Target className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Ciljevi</p>
          <p className="text-xs text-gray-600">Postavljanje ciljeva</p>
        </div>
        <div className="text-center">
          <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Savjeti</p>
          <p className="text-xs text-gray-600">Karijerni savjeti</p>
        </div>
      </div>

      <button
        onClick={() => setShowChat(true)}
        className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
      >
        Razgovaraj s mentorom
      </button>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <Users className="w-4 h-4 inline mr-1" />
        Osobna mentorska podrška
      </div>
    </div>
  );
}