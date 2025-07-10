import React from 'react';
import { Sunrise, Sunset } from 'lucide-react';

function SunPath({ sunrise = "6:00 AM", sunset = "6:00 PM", currentTime = "8:00 PM" }) {
  const timeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const sunriseMin = timeToMinutes(sunrise);
  const sunsetMin = timeToMinutes(sunset);
  const currentMin = timeToMinutes(currentTime);
  const percentage = Math.min(100, Math.max(0, ((currentMin - sunriseMin) / (sunsetMin - sunriseMin)) * 100));

  const sunX = 20 + (percentage / 100) * 160;
  const sunY = 60 - Math.sin((percentage / 100) * Math.PI) * 40;

  // ✅ Updated isNight logic
const isNight = currentMin < sunriseMin || currentMin > sunsetMin;
  const bgClass = isNight
    ? "bg-gradient-to-b from-[#0f172a] to-black"
    : "bg-gradient-to-b from-sky-900 to-slate-900";

  return (
    <div className={`relative mt-2 p-1 rounded-xl shadow-lg w-full mx-auto ${bgClass}`}>
      
      {/* 🌟 Stars at night */}
      {isNight && (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse opacity-70"
              style={{
                top: `${Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 4}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Sun Arc */}
      <div className="relative h-28 mb-4">
        <svg className="w-full h-full" viewBox="0 0 200 80">
          <path
            d="M20,60 Q100,20 180,60"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="2,4"
          />

          {currentMin >= sunriseMin && currentMin <= sunsetMin && (
            <>
              <path
                d={`M22,58 Q98,28 ${sunX},${sunY}`}
                stroke="#facc15"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <circle
                cx={sunX}
                cy={sunY}
                r="8"
                fill="#fbbf24"
                className="animate-pulse"
              />
            </>
          )}
        </svg>
      </div>

      {/* Time Info */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Sunrise className="w-5 h-5 text-orange-400" />
          <div>
            <div className="text-xs text-slate-400">Sunrise</div>
            <div className="text-sm text-white font-medium">{sunrise}</div>
          </div>
        </div>

        <div className="text-center text-white">
          <div className="text-xs text-slate-400">Now</div>
          <div className="text-sm font-semibold">{currentTime}</div>
        </div>

        <div className="flex items-center space-x-2">
          <Sunset className="w-5 h-5 text-orange-600" />
          <div>
            <div className="text-xs text-slate-400">Sunset</div>
            <div className="text-sm text-white font-medium">{sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunPath;
