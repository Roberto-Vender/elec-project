import React from 'react';
import { Link } from 'react-router-dom';

function ServiceProfile() {
  return (
    <div>
      <div className="flex flex-col bg-white min-h-screen p-5">
        <div className="p-4 bg-blue-700 text-white flex">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-2xl">S</span>
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-semibold">Home Service (Profile)</h1>
              <p>#xxxx-xxx-xxxx</p>
              <p>Jane Doe S.</p>
              <p>Service Type</p>
              <p>Rate</p>
              <p>Service area</p>
            </div>
          </div>
          <div className="ml-auto">
            <Link to="/CreateProfile">
            <button className="bg-gray-200 text-blue-700 px-4 py-2 rounded">Edit Profile Details</button>
            </Link>
            <Link to="/Login">
            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded">Log Out</button>
            </Link>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">My Profile</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">First Name:</label>
                <div className="border border-gray-300 p-2 w-full rounded">Jane</div>
              </div>
              <div>
                <label className="block mb-1">Last Name:</label>
                <div className="border border-gray-300 p-2 w-full rounded">Doe</div>
              </div>
              <div>
                <label className="block mb-1">Sex:</label>
                <div className="border border-gray-300 p-2 w-full rounded">Female</div>
              </div>
              <div>
                <label className="block mb-1">Date of Birth:</label>
                <div className="border border-gray-300 p-2 w-full rounded">01/01/1990</div>
              </div>
              <div>
                <label className="block mb-1">Phone Number:</label>
                <div className="border border-gray-300 p-2 w-full rounded">#xxxx-xxx-xxxx</div>
              </div>
              <div>
                <label className="block mb-1">Email:</label>
                <div className="border border-gray-300 p-2 w-full rounded">janedoe@example.com</div>
              </div>
              <div>
                <label className="block mb-1">Nationality:</label>
                <div className="border border-gray-300 p-2 w-full rounded">American</div>
              </div>
              <div>
                <label className="block mb-1">Civil Status:</label>
                <div className="border border-gray-300 p-2 w-full rounded">Single</div>
              </div>
              <div>
                <label className="block mb-1">Rate:</label>
                <div className="border border-gray-300 p-2 w-60 rounded">$50/hr</div>
              </div>
              <div>
                <label className="block mb-1">Service Type:</label>
                <div className="border border-gray-300 p-2 w-60 rounded">Service 1</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Current Address:</label>
              <div className="border border-gray-300 p-2 w-full rounded">123 Main St, City, Country</div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Description:</label>
              <div className="border border-gray-300 p-2 w-full rounded">Experienced service provider.</div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Service area:</label>
              <div className="border border-gray-300 p-2 w-full rounded">Area 1, City</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceProfile;
