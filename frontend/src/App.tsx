import React, { useState, useRef } from "react";
import { Heart } from "lucide-react";
import { ImageColumn } from "./components/ImageColumn";
import { MobileImageScroll } from "./components/MobileImageScroll";
import { MobileMenu } from "./components/MobileMenu";
import { SearchBar } from "./components/SearchBar";
import { LifestyleCards } from "./components/LifestyleCards";
import GradientDivider from "./components/GradientDivider";
// Import at top of file
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const images = [
  "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574226516831-e1dff420e562?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (cardsContainerRef.current) {
      const scrollAmount = 300; // Width of one card
      const scrollPosition =
        direction === "left"
          ? cardsContainerRef.current.scrollLeft - scrollAmount
          : cardsContainerRef.current.scrollLeft + scrollAmount;

      cardsContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full">
      <header className="bg-white shadow-sm relative w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <span className="text-lg md:text-xl font-bold">ProVital</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center">
              <a href="#" className="text-secondary hover:text-gray-900">
                List your practice
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="#" className="text-secondary hover:text-gray-900">
                For Employers
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="#" className="text-secondary hover:text-gray-900">
                Courses
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="#" className="text-secondary hover:text-gray-900">
                Books
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="#" className="text-secondary hover:text-gray-900">
                Speakers
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="#" className="text-secondary hover:text-gray-900">
                Doctors
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <div className="relative group">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-secondary hover:text-grey-900 flex items-center gap-2"
                >
                  Login/Sign up
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-[-20px] top-full mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="#" className="block px-4 py-2 text-sm ">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">
                          Doctor
                        </span>
                        <div className="flex gap-3">
                          <span className="text-[#4384E6]">Login</span>
                          <span className="text-[#4384E6]">Signup</span>
                        </div>
                      </div>
                    </a>
                    <div className="border-t border-gray-200"></div>
                    <a href="#" className="block px-4 py-2 text-sm ">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">
                          Patient
                        </span>
                        <div className="flex gap-3">
                          <span className="text-[#4384E6]">Login</span>
                          <span className="text-[#4384E6]">Signup</span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <MobileMenu
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </nav>
      </header>

      <main className="w-full overflow-x-hidden">
        <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Desktop-only centered search bar */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8 z-30">
            <SearchBar />
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-0 pb-8 relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              {/* Hero Text Content */}
              <div className="order-1 md:order-2 md:w-1/2 text-center md:text-left md:pt-12 md:pl-12">
                <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-font-inter">
                  Book an appointment with{" "}
                  <span className="text-gradient text-font-inter">
                    lifestyle medicine
                  </span>{" "}
                  experts
                </h1>
                <p className="text-base md:text-l text-secondary mb-8 text-font-inter">
                  Optimize your lifestyle and reverse chronic diseases.
                </p>
              </div>

              {/* Image Carousel */}
              <div className="order-3 md:order-1 md:w-1/2 md:-mt-16 md:-ml-10 relative z-0">
                {/* Desktop Carousel */}
                <div className="hidden md:block h-[32rem]">
                  <div className="grid grid-cols-2 max-w-3xl mx-auto h-full gap-4">
                    {/* First Column */}
                    <div className="relative h-full mt-12">
                      <div className="absolute inset-0">
                        <ImageColumn
                          images={images.slice(0, 3)}
                          direction="up"
                        />
                      </div>
                    </div>
                    {/* Second Column */}
                    <div className="relative h-full ">
                      <div className="absolute inset-0">
                        <ImageColumn
                          images={images.slice(3)}
                          direction="down"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-only search bar - Between text and carousel */}
                <div className="md:hidden order-2 mb-8">
                  <SearchBar />
                </div>

                {/* Mobile Image Scroll */}
                <div className="md:hidden -mx-4 px-4 w-screen">
                  <MobileImageScroll images={images} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <GradientDivider />
          </div>
        </section>

        {/* Lifestyle Cards Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section headers with navigation arrows */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-2">
                  HOW IT WORKS
                </h3>
                <h2 className="text-lg md:text-2xl font-semibold font-inter">
                  <em className="text-gradient-secondary italic">
                    Lifestyle as medicine:
                  </em>{" "}
                  The six pillars
                </h2>
              </div>
              {/* Navigation Arrows */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
                >
                  <IconArrowLeft size={20} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
                >
                  <IconArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Pill buttons */}
            <div className="flex gap-3 overflow-x-auto pb-6 mb-8">
              {[
                "Nutrition",
                "Physical Activity",
                "Restorative Sleep",
                "Stress Management",
                "Social Connection ",
                "Substance Abuse",
              ].map((item) => (
                <button
                  key={item}
                  className="flex-none px-4 py-1.5 rounded-full text-sm font-medium 
                 bg-white border border-gray-200 
                 text-secondary text-font-inter
                 hover:bg-gray-900 hover:text-white hover:border-gray-900 
                 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <div ref={cardsContainerRef} className="overflow-x-hidden">
              {/* Cards */}
              <LifestyleCards />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
