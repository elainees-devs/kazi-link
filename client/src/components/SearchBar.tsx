import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { categories } from "../data/category_data";
import { jobs } from "../data/jobs_data";

interface SearchBarProps {
  onSearch: (filters: {
    category: string;
    location: string;
    keyword: string;
  }) => void;
}

// Extract unique locations from jobs data
const uniqueLocations = Array.from(new Set(jobs.map((job) => job.location)));

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ category, location, keyword });
  };

  return (
    <form
      className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center gap-2 mb-3 w-full max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <select
        className="border rounded px-3 py-2 text-gray-700 focus:outline-none w-full md:w-auto"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Industry</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select
        className="border rounded px-3 py-2 text-gray-700 focus:outline-none w-full md:w-auto"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Location</option>
        {uniqueLocations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Keywords"
        className="border rounded px-3 py-2 text-gray-700 focus:outline-none w-full md:w-auto"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition w-full md:w-auto flex items-center gap-2 justify-center"
      >
        <FaSearch />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
