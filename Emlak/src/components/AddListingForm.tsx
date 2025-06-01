import { useState } from 'react';
import { useListing } from '../context/ListingContext';

export const AddListingForm = () => {
  const { addListing } = useListing();
  const [form, setForm] = useState({
    title: '',
    location: '',
    roomCount: '',
    description: '',
    price: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newListing = {
      id: Date.now().toString(),
      title: form.title,
      location: form.location,
      roomCount: form.roomCount,
      description: form.description,
      price: parseFloat(form.price),
      images: [],
    };

    addListing(newListing);
    setForm({
      title: '',
      location: '',
      roomCount: '',
      description: '',
      price: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md mx-auto p-4"
    >
      <input
        name="title"
        placeholder="Başlık"
        value={form.title}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        name="location"
        placeholder="Konum"
        value={form.location}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        name="roomCount"
        placeholder="Oda Sayısı (örn: 3+1)"
        value={form.roomCount}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <textarea
        name="description"
        placeholder="Açıklama"
        value={form.description}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        name="price"
        type="number"
        placeholder="Fiyat"
        value={form.price}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        İlan Ekle
      </button>
    </form>
  );
};
