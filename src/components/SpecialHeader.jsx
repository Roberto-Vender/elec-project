import { useState } from 'react';

function SpecialHeader() {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="bg-blue-900 p-3.5 z-10">
        <div className="flex justify-between items-center mx-12">
          {/* Header Text */}
          <h1 className="text-2xl text-yellow-500 text-center font-bold font-poppins">
            Home Services Booking Platform
          </h1>

          {/* Service Type Dropdown */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-haspopup="true"
              onClick={toggleDropdown} // Toggle dropdown visibility
            >
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 7l7 7 7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="/ServiceProfile"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="/AvailableWeek"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                >
                    Availability for the week
                </a>
                <a
                  href="/Bookingrequest"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                >
                  Booking Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialHeader;
