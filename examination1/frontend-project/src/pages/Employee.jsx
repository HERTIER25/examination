import Navbar from "../components/Navbar";

function Employee() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Employee Registration
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input className="border p-2 rounded" placeholder="First Name" />
          <input className="border p-2 rounded" placeholder="Last Name" />
          <input className="border p-2 rounded" placeholder="Position" />
          <input className="border p-2 rounded" placeholder="Address" />
          <input className="border p-2 rounded" placeholder="Telephone" />

          <select className="border p-2 rounded">
            <option>Male</option>
            <option>Female</option>
          </select>

          <input type="date" className="border p-2 rounded" />

          <input
            className="border p-2 rounded"
            placeholder="Department Code"
          />

        </div>

        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
          Save Employee
        </button>

      </div>
    </>
  );
}

export default Employee;