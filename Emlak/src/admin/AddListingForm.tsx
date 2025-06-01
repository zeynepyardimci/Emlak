import { useState } from "react";
import { useListing } from "@/context/ListingContext";

const AddListingForm = () => {
  const { addListing } = useListing();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    roomCount: "",
    description: "",
    price: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addListing({
      id: crypto.randomUUID(),
      ...formData,
      roomCount: formData.roomCount,
      price: Number(formData.price),
      images: []
    });
    setFormData({
      title: "",
      location: "",
      roomCount: "",
      description: "",
      price: ""
    });
  };

  return (
    <div className="bg-kahve p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Yeni İlan Ekle</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Başlık</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-navbar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Konum</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-navbar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Oda Sayısı</label>
            <input
              name="roomCount"
              value={formData.roomCount}
              onChange={handleChange}
              className="bg-navbar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-navbar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat (₺)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-navbar w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-end pt-4">
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              İlan Ekle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;