import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Devagn Maniya. All rights reserved.
        </p>
        <a
          href="https://github.com/devagn611" // Replace with your GitHub username
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3c-4.97 0-9 4.03-9 9 0 4.03 2.67 7.43 6.3 8.67.46.08.63-.2.63-.45 0-.22-.01-.97-.01-1.76-2.56.56-3.1-1.23-3.1-1.23-.42-1.07-1.03-1.35-1.03-1.35-.84-.57.06-.56.06-.56 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.36.1-2.83 0 0 .84-.27 2.75 1.02a9.63 9.63 0 0 1 2.5-.34c.85.004 1.71.115 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.47.2 2.57.1 2.83.64.7 1.03 1.6 1.03 2.69 0 3.83-2.35 4.67-4.57 4.92.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .25.17.53.63.45C18.33 19.43 21 16.03 21 12c0-4.97-4.03-9-9-9z"
            />
          </svg>
          <span className="text-sm">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
