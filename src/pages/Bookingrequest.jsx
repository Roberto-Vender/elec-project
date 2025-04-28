import React from 'react';

function AvailableWeek() {
  return (
    <div className="bg-white p-5">
      <div className="p-4 bg-blue-700 text-white">
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
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Booking Request</h2>
      </div>

      <table className="mt-4 w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="py-2 px-4 text-center">Customer Name</th>
            <th className="py-2 px-4 text-center">Day</th>
            <th className="py-2 px-4 text-center">Time Start</th>
            <th className="py-2 px-4 text-center">Time End</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* First row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">VENDER</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>

          {/* Second row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">ARSUA</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>

          {/* Third row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">NOQUANNA</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>

          {/* Fourth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">AYUMAN</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>

          {/* Fifth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">ABELLA</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>

          {/* Sixth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">LORENZO</td>
            <td className="py-2 px-4 text-center">DAY</td>
            <td className="py-2 px-4 text-center">08:00 AM</td>
            <td className="py-2 px-4 text-center">10:00 AM</td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-600 rounded-full w-28 h-8">Accept</button>
                <button className="bg-red-600 rounded-full w-28 h-8">Decline</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AvailableWeek;
