
import React from 'react';

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.04 23.04 0 0112 15c-3.806 0-7.358-.768-10.474-2.131M12 15v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5m10 0v5a2 2 0 002 2h2a2 2 0 002-2v-5M12 15l-2.071-3.625A2 2 0 017.929 9.5H7a2 2 0 01-2-2v-1a2 2 0 012-2h.929a2 2 0 011.788 1.125L12 9m0 6l2.071-3.625A2 2 0 0016.072 9.5H17a2 2 0 002-2v-1a2 2 0 00-2-2h-.928a2 2 0 00-1.788 1.125L12 9" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-neutral to-gray-800 shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <DumbbellIcon />
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
            FitTrack Pro
            </h1>
        </div>
        <button className="hidden md:inline-block bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            User Profile
        </button>
      </div>
    </header>
  );
};
