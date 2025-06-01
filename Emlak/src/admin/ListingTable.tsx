import { useListing } from "@/context/ListingContext";

const ListingTable = () => {
  const { filteredListings, deleteListing } = useListing();

  return (
    <div className="overflow-x-auto mt-6">
      <table className="bg-tas min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="bg-navbar p-3 text-left text-gray-700 font-semibold">Başlık</th>
            <th className="bg-navbar p-3 text-left text-gray-700 font-semibold">Konum</th>
            <th className="bg-navbar p-3 text-left text-gray-700 font-semibold">Oda</th>
            <th className="bg-navbar p-3 text-left text-gray-700 font-semibold">Fiyat</th>
            <th className="bg-navbar p-3 text-left text-gray-700 font-semibold">Sil</th>
          </tr>
        </thead>
        <tbody>
          {filteredListings.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                Kayıt bulunamadı.
              </td>
            </tr>
          ) : (
            filteredListings.map((item) => (
              <tr key={item.id} className="border-t border-gray-300 hover:bg-navbar transition">
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">{item.roomCount}</td>
                <td className="p-3">{item.price} TL</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteListing(item.id)}
                    className="text-red-600 hover:underline focus:outline-none"
                    aria-label={`Delete listing titled ${item.title}`}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
