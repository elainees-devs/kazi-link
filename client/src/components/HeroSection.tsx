
import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="bg-[#f7fafd] py-12 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Your <span className="text-blue-600">Next Opportunity</span>
          <br />
          Starts Here
        </h1>
        <p className="text-gray-600 mb-6">
          Join millions of job seekers who discover new opportunities every
          month and submit thousands of applications daily to top employers.
        </p>
        {/* Search Bar */}
        <SearchBar onSearch={() => {}} />
        {/* Popular Searches */}
        <div className="text-sm text-gray-500">
          <span className="mr-2">Popular Searches:</span>
          <a href="#" className="text-blue-600 underline mr-2">
            Content Writer
          </a>
          <a href="#" className="text-blue-600 underline mr-2">
            Finance
          </a>
          <a href="#" className="text-blue-600 underline mr-2">
            Human Resource
          </a>
          <a href="#" className="text-blue-600 underline">
            Management
          </a>
        </div>
      </div>

      {/* Right Images */}
      <div className="hidden md:flex flex-col gap-6 ml-8 z-10">
        <div className="rounded-2xl border-4 border-blue-200 overflow-hidden w-64 h-40 shadow-md mb-2">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
            alt="Team working together"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="rounded-2xl border-4 border-blue-200 overflow-hidden w-64 h-40 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
            alt="Business meeting"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
