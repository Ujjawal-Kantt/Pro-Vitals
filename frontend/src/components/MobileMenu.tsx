import React from 'react';
import { Menu, X } from 'lucide-react';

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
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="fixed inset-x-0 top-[64px] bg-white shadow-lg z-50 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-3">
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              List your practice
            </a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              For Employers
            </a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              Courses
            </a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              Books
            </a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              Speakers
            </a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
              Doctors
            </a>
            <div className="pt-2 space-y-3">
              <a href="#" className="block w-full text-center px-3 py-2 text-blue-500 hover:text-blue-600 transition-colors">
                Login
              </a>
              <a href="#" className="block w-full text-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Sign up
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}