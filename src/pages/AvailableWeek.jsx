import React from 'react';


function AvailableWeek() {
  return (
    <div className=" bg-white p-5">
        <div className="p-4 bg-blue-700 text-white ">
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
    <h2 className="text-2xl font-bold">Availability for this Week</h2>
    <div className="mt-2">
      <div className="flex justify-between mt-3">
      </div>
    </div>
  </div>

  <table className="mt-4 w-full bg-white rounded shadow-md">
  <thead>
    <tr className="bg-blue-950 text-white">
      <th className="py-2 px-4 text-center">Day</th>
      <th className="py-2 px-4 text-center">Available</th>
      <th className="py-2 px-4 text-center">From</th>
      <th className="py-2 px-4 text-center">To</th>
    </tr>
  </thead>
  <tbody>
    {/* Loop for each day of the week */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">MONDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>

    {/* Repeat this row for other days (Tuesday to Sunday) */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">TUESDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>

    {/* Repeat this row for other days */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">WEDNESDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>

    {/* Repeat this row for other days */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">THURSDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>

    {/* Repeat this row for other days */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">FRIDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>

    {/* Repeat this row for Saturday */}
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 text-center">SATURDAY</td>
      <td className="py-2 px-4 text-center">
        <input type="checkbox" className="w-5 h-5" />
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
      <td className="py-2 px-4 text-center">
        <select className="py-2 px-4">
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
      </td>
    </tr>
  </tbody>
</table>

</div>
  );
}

export default AvailableWeek;
