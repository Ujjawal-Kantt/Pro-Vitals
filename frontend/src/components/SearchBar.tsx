import React from "react";
import { Search, MapPin, CreditCard } from "lucide-react";

export function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 bg-white rounded-lg shadow-lg p-3 md:p-4">
        <div className="bg-white p-3 md:p-4 border-2 border-gray-200">
          <div className="flex-1 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Condition, procedure, specialty..."
              className="w-full text-sm md:text-base outline-none min-w-0"
            />
          </div>
        </div>
        <div className="bg-white p-3 md:p-4 border-2 border-gray-100">
          <div className="flex-1 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="City, State or ZipCode..."
              className="w-full text-sm md:text-base outline-none min-w-0"
            />
          </div>
        </div>
        <div className="bg-white  p-3 md:p-4 border-2 border-gray-200">
          <div className="flex-1 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Insurance Carrier"
              className="w-full text-sm md:text-base outline-none min-w-0"
            />
          </div>
        </div>
        <button
          className="w-full md:w-auto btn-gradient text-white px-6 py-3 rounded-md 
             transition-all duration-200 flex-shrink-0 text-base font-medium
             flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Find now
        </button>
      </div>
    </div>
  );
}
