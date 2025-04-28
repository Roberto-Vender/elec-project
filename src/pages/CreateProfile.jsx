import React from 'react';
import { Link } from 'react-router-dom'; 

const CreateProfile = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white min-h-screen p-5">
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-3xl">
              S
            </div>
            <div className="ml-4"></div>
          </div>

          <h1 className="text-2xl font-semibold mb-4">Create profile</h1>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">First Name:</label>
              <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="First Name"/>
            </div>
            <div>
              <label className="block mb-1">Last Name:</label>
              <input type="text" className=" border border-blakc-200 w-full p-2 rounded bg-gray-600" placeholder="Last Name"/>
            </div>
            <div>
              <label className="block mb-1">Sex:</label>
              <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="Sex"/>
            </div>
            <div>
              <label className="block mb-1">Date of Birth:</label>
              <input type="date" className="w-full p-2 rounded bg-gray-600" />
            </div>
            <div>
              <label className="block mb-1">Phone Number:</label>
              <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="Phone Number"/>
            </div>
            <div>
              <label className="block mb-1">Email:</label>
              <input type="email" className="w-full p-2 rounded bg-gray-600" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-1">Nationality:</label>
              <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="Nationality"/>
            </div>
            <div>
              <label className="block mb-1">Civil Status:</label>
              <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="Civil Status"/>
            </div>
            <div>
              <label className="block mb-1">Rate:</label>
              <input type="text" className="w-60 p-2 rounded bg-gray-600" placeholder="Rate"/>
            </div>
            <div>
              <label className="block mb-1">Service Type:</label>
              <select className="w-60 p-2 rounded bg-gray-600">
                <option value="" disabled selected>Select a service type</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
                <option value="service4">Service 4</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Current Address:</label>
            <textarea className="w-full p-2 rounded bg-gray-600" rows="2" placeholder="Current Address"></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Description:</label>
            <textarea className="w-full p-2 rounded bg-gray-600" rows="3" placeholder="Description"></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Service area:</label>
            <input type="text" className="w-full p-2 rounded bg-gray-600" placeholder="Service area"/>
          </div>

          <div className="flex justify-between items-center mt-4">
          <Link to="/ServiceProfile">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4">
          Create account
          </button>
          </Link>

          <Link to="/Login" className="text-red-500 hover:underline ml-4 absolute left-48">
          Cancel Creating
          </Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
