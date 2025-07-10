import React from 'react'

function HighlightCard({title, children, classname}) {
  return (
    // {`bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] ${className}`}
    
    <div className={`bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] ${classname}`}>
      <h2 className='text-slate-400 text-sm font-medium'>{title}</h2>
      {children}
    </div>
  )
}

export default HighlightCard
