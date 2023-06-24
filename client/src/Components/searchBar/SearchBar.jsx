// eslint-disable-next-line no-unused-vars
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-3 text-lg text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
        placeholder="Search"
      />
      <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-full rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
