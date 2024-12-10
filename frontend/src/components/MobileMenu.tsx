// MobileMenu.tsx
import React from "react";
import { Menu, X } from "lucide-react";
import rightArrow from "../assets/vectors/rightarrow.png";
interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}
export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex flex-col h-full">
            {/* Header */}
            {/* Header */}
            <div className="p-4 flex justify-end items-center border-b">
              <button onClick={onToggle}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              {/* Auth Section Container */}
              <div className="border border-gray-200 p-8 mb-8">
                {/* Doctor Section */}
                <div className="flex justify-between items-center p-3 hover:bg-white rounded-lg mb-3">
                  <span className="font-semibold text-gray-900">Doctor</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4384E6] underline">Login</span>
                    <span className="text-[#4384E6] underline">Signup</span>
                    <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                  </div>
                </div>

                {/* Patient Section */}
                <div className="flex justify-between items-center p-3 hover:bg-white rounded-lg">
                  <span className="font-semibold text-gray-900">Patient</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4384E6] underline">Login</span>
                    <span className="text-[#4384E6] underline">Signup</span>
                    <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-4">
                <a
                  href="#"
                  className="flex justify-between font-semibold items-center p-3 hover:bg-gray-50 rounded-lg"
                >
                  <span>List your practice</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
                <div className="border-t border-gray-200" />

                {/* Repeat for other menu items */}
                <a
                  href="#"
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg font-semibold "
                >
                  <span>For Employers</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
                <div className="border-t border-gray-200" />

                <a
                  href="#"
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg font-semibold"
                >
                  <span>Courses</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
                <div className="border-t border-gray-200" />

                <a
                  href="#"
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg font-semibold"
                >
                  <span>Books</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
                <div className="border-t border-gray-200" />

                <a
                  href="#"
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg font-semibold"
                >
                  <span>Speakers</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
                <div className="border-t border-gray-200" />

                <a
                  href="#"
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg font-semibold"
                >
                  <span>Doctors</span>
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
