import React from 'react';
import { Search, MapPin, CreditCard } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 bg-white rounded-lg shadow-lg p-3 md:p-4">
        <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Condition, procedure, specialty..."
            className="w-full text-sm md:text-base outline-none min-w-0"
          />
        </div>
        <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4">
          <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className="w-full text-sm md:text-base outline-none min-w-0"
          />
        </div>
        <div className="flex-1 flex items-center gap-2 pb-3 md:pb-0">
          <CreditCard className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Insurance carrier"
            className="w-full text-sm md:text-base outline-none min-w-0"
          />
        </div>
        <button className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors flex-shrink-0 text-base font-medium">
          Find now
        </button>
      </div>
    </div>
  );
}