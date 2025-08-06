import { useState } from "react";

function MarketplaceApp() {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([
    { title: "Vintage Table", user: "John Doe", status: "Approved" },
    { title: "Graphic Design", user: "Alice Smith", status: "Pending" },
    { title: "Laptop", user: "Michael Johnson", status: "Rejected" },
  ]);

  const loginUser = () => setUser({ name: "John Doe" });

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        {user ? (
          <span>Welcome, {user.name}</span>
        ) : (
          <button
            onClick={loginUser}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Login
          </button>
        )}
      </header>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search listings..."
          className="mb-2 px-3 py-2 border rounded w-full"
        />
        <div className="flex space-x-2 mt-2">
          <button className="px-4 py-2 bg-gray-300 rounded">Products</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Services</button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white p-4 shadow rounded">
          <img src="https://via.placeholder.com/150" alt="chair" className="mb-2" />
          <h2 className="text-lg font-bold">Mid-Century Chair</h2>
          <p className="text-sm">Sleek and modern chair</p>
          <p className="text-base font-semibold">$150.00</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <img src="https://via.placeholder.com/150" alt="logo" className="mb-2" />
          <h2 className="text-lg font-bold">Logo Design</h2>
          <p className="text-sm">Professional logo creation</p>
          <p className="text-base font-semibold">$50.00/hr</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <img src="https://via.placeholder.com/150" alt="phone" className="mb-2" />
          <h2 className="text-lg font-bold">Smartphone</h2>
          <p className="text-sm">Latest model, excellent condition</p>
          <p className="text-base font-semibold">$300.00</p>
        </div>
      </section>

      {user && (
        <section>
          <h2 className="text-2xl font-bold mb-4">My Listings</h2>
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="border px-2 py-1">Listing</th>
                <th className="border px-2 py-1">User</th>
                <th className="border px-2 py-1">Status</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1">{item.title}</td>
                  <td className="border px-2 py-1">{item.user}</td>
                  <td className="border px-2 py-1 font-bold text-blue-600">
                    {item.status}
                  </td>
                  <td className="border px-2 py-1 space-x-2">
                    <button className="px-2 py-1 bg-yellow-500 text-white rounded text-sm">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default MarketplaceApp;
