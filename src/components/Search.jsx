import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} className="mb-8 mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full md:w-2/3 p-3 rounded-lg border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-150"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
