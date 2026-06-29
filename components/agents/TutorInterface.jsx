'use client';

import { useState } from 'react';
import { BookOpen, HelpCircle, CheckCircle, Lightbulb } from 'lucide-react';
import AgentChatShell from './AgentChatShell';

export default function TutorInterface() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <AgentChatShell
        agentType="tutor"
        agentName="Tutor"
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-green-100 p-3 rounded-full">
          <BookOpen className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Tutor</h3>
          <p className="text-sm text-gray-600">Osobni učitelj</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6">
        Dobij pomoć u razumijevanju koncepata, rješavanju problema i vježbanju za maturu.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <HelpCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Objašnjenja</p>
          <p className="text-xs text-gray-600">Jasna objašnjenja koncepata</p>
        </div>
        <div className="text-center">
          <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Provjera</p>
          <p className="text-xs text-gray-600">Provjera rješenja</p>
        </div>
      </div>

      <button
        onClick={() => setShowChat(true)}
        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
      >
        Pitaj tutora
      </button>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <Lightbulb className="w-4 h-4 inline mr-1" />
        24/7 dostupan AI tutor
      </div>
    </div>
  );
}