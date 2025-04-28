import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookAppointment() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // Function to open the review modal
  const openReviewModal = (customerName) => {
    setSelectedCustomer(customerName);
    setShowReviewModal(true);
  };

  // Function to open the book appointment modal
  const openBookingModal = (customerName) => {
    setSelectedCustomer(customerName);
    setShowBookingModal(true);
  };

  // Function to close the modals
  const closeModal = () => {
    setShowReviewModal(false);
    setShowBookingModal(false);
    setSelectedCustomer("");
  };

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
            <th className="py-2 px-4 text-center">Book Appointment</th>
            <th className="py-2 px-4 text-center">Review</th>
          </tr>
        </thead>
        <tbody>
          {/* First row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>VENDER <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal("VENDER")}>
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("VENDER")}
              >
                Review
              </button>
            </td>
          </tr>

          {/* Second row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>ARSUA <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal("ARSUA")}>
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("ARSUA")}
              >
                Review
              </button>
            </td>
          </tr>

          {/* Third row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>NOQUANNA <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal("NOQUANNA")}>
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("NOQUANNA")}
              >
                Review
              </button>
            </td>
          </tr>

          {/* Fourth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>AYUMAN <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal("AYUMAN")}>
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("AYUMAN")}
              >
                Review
              </button>
            </td>
          </tr>

          {/* Fifth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>ABELLA <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal("ABELLA")}>
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("ABELLA")}
              >
                Review
              </button>
            </td>
          </tr>

          {/* Sixth row */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">
              <div className="flex flex-col items-center">
                <span>LORENZO <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-44 h-8 "
                onClick={() => openBookingModal("LORENZO")}
              >
                Book Appointment
              </button>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                className="bg-green-600 rounded-full w-28 h-8"
                onClick={() => openReviewModal("LORENZO")}
              >
                Review
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal for Review */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Write a Review for {selectedCustomer}</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Write your review here..."
            ></textarea>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="bg-green-500 text-white rounded-md px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

{showBookingModal && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-5 rounded-lg shadow-lg w-[1100px] h-[500px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment for {selectedCustomer}</h2>

      {/* First Row */}
      <div className="flex gap-6 mb-4">
        {/* Firstname */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Firstname</label>
          <input
            type="text"
            placeholder="Firstname"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Lastname */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Date of Birth</label>
          <input
            type="date"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Sex */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Sex</label>
          <input
            type="text"
            placeholder="Sex"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-6 mb-4">
        {/* Gmail */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Gmail</label>
          <input
            type="email"
            placeholder="Email"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Service Type */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Service Type</label>
          <input
            type="text"
            placeholder="Service Type"
            className="w-60 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Additional Details Textarea */}
      <div className="flex flex-col mb-4">
        <label className="mb-1 font-semibold">Current Address</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Current Address"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
      <button className="bg-green-500 text-white rounded-md px-6 py-2">
          Submit
        </button>
        <button
          className="bg-blue-500 text-white rounded-md px-6 py-2"
          onClick={closeModal}
        >
          Close
        </button>
        
      </div>
    </div>
  </div>
)}

  </div>
  );
}

export default BookAppointment;
