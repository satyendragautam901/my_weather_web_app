import React from "react";
import { getFullWindDirection } from "../utils/GetWindDirection";

function WindChart({ speed,  windDirection }) {
  return (
    <div>
      {/* speed and time */}
      <div className="flex justify-between items-end mb-2">
        <div>
          <div className="text-3xl text-white font-light mb-1">{speed}</div>
          <div className="text-slate-400 text-sm">km/h</div>
        </div>
        <div className="text-slate-400 text-sm">
          {getFullWindDirection(windDirection)}
        </div>
      </div>

      {/* speed meter like  */}

      <div className="relative h-16 mb-4">
        <svg className="w-full h-full" viewBox="0 0 300 50">

          {/* define path in co-ordinate */}
          <path
            d="M0,50 Q75,30 160,40 T300,25"
            stroke="url(#windGradient)"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-sm"
          />
        {/* this will define styling to curve */}
        <defs>
          <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs> 
        </svg>
      </div>

      {/* numbering to this curve */}
      <div className="flex justify-between">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((hour,index) =>(
          <div key={hour} className="flex flex-col items-center">
            <div
            className="w-1 bg-gradient-to-t from-blue-500 to bg-cyan-400 rounded-full mb-1"
            style={{
                height: `${Math.random() * 20 + 8}px`,
                opacity: index === 5 ? 1 : 0.6,
              }}
              >
            </div>
            <div className="text-xs text-slate-500">{hour}</div>
          </div>
        )) 
        }
      </div>

      
    </div>
  );
}

export default WindChart;
