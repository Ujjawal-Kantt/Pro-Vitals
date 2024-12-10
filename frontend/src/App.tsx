import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { ImageColumn } from './components/ImageColumn';
import { MobileImageScroll } from './components/MobileImageScroll';
import { MobileMenu } from './components/MobileMenu';
import { SearchBar } from './components/SearchBar';
import { LifestyleCards } from './components/LifestyleCards';

const images = [
  'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1574226516831-e1dff420e562?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full">
      <header className="bg-white shadow-sm relative w-full">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
            <span className="text-lg md:text-xl font-bold">ProVital</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">List your practice</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">For Employers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Courses</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Books</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Speakers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Doctors</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">Login</a>
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign up</a>
            </div>
            <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </nav>
      </header>

      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Book an appointment with{' '}
              <span className="text-blue-500">lifestyle medicine</span> experts
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
            <SearchBar />
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Image Columns */}
            <div className="hidden md:block h-[32rem]">
              <div className="grid grid-cols-2 max-w-3xl mx-auto h-full gap-4">
                <ImageColumn images={images.slice(0, 3)} direction="down" />
                <ImageColumn images={images.slice(3)} direction="up" />
              </div>
            </div>
            {/* Mobile Image Scroll */}
            <div className="md:hidden -mx-4 px-4 w-screen">
              <MobileImageScroll images={images} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Lifestyle Cards Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-lg md:text-2xl font-semibold mb-8 text-center">
              Lifestyle as medicine: The six pillars
            </h2>
            <LifestyleCards />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;