import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <Link
        to="/"
        className="z-10 self-start mb-10 px-4 py-2 rounded-full bg-white/80 text-black font-semibold shadow-lg hover:bg-white transition duration-200"
      >
        ← Back
      </Link>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-6">
          About This Website
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Movie Search Application! This website is designed to help you easily discover movies and TV shows from the vast library available on the OMDB API.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With a user-friendly interface, you can search for your favorite titles, view detailed information about each movie, and explore a variety of genres. Whether you're looking for classic films or the latest releases, this application has you covered.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Search for movies and TV shows by title.</li>
          <li>View detailed information about each movie.</li>
          <li>Responsive design for an optimal viewing experience on all devices.</li>
          <li>Integrated with the OMDB API for real-time data.</li>
          <li>Bookmark your favorite movies for easy access.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          We hope you enjoy using this application as much as we enjoyed building it! If you have any feedback or suggestions, feel free to reach out on our <a href="https://github.com/devagn611" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a> page.
        </p>
      </div>
    </div>
  );
};

export default About;
