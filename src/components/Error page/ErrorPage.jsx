import React from 'react';
import { AlertTriangle } from 'lucide-react';

function ErrorPage({ onRetry }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 text-center">
      <div className="p-6 bg-slate-800/40 border border-slate-700 rounded-3xl shadow-xl max-w-md w-full">
        <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
        <h1 className="text-white text-2xl font-semibold mb-2">Oops! Something went wrong</h1>
        <p className="text-slate-400 text-sm mb-6">
          Hey! Thank you for using my weather app. <br />
          Please try again — we're doing our best to get things back on track.
        </p>
        <button
          onClick={onRetry}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
