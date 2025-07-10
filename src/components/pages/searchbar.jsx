import React from 'react'
import { useState } from 'react'
import { Search } from 'lucide-react';

function SearchBar({ onSearch }) {
  const [formdata, setFormData] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    onSearch(formdata); // Pass city to parent
    setFormData("");
  };

  return (
    <form onSubmit={handlesubmit} className="relative mb-8">
      <div className="relative">
        <Search className="z-10 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={formdata}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Search for a location... "
          className='py-4 px-12 w-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/60 transition-all duration-300'
        />
      </div>
    </form>
  );
}


export default SearchBar
