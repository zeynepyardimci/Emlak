import FilterForm from "@/components/FilterForm";
import { useListing } from "@/context/ListingContext";
import { Link } from "react-router-dom";

const Listings = () => {
  const { filteredListings } = useListing();

  return (
    <div className="bg-tas">
        <section className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Tüm İlanlar</h1>
        <FilterForm />
        <div className="grid gap-6 md:grid-cols-2">
            {filteredListings.map((ilan) => (
            <div key={ilan.id} className="bg-navbar border rounded-lg p-4 hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{ilan.title}</h2>
                <p className="mt-2 font-bold text-green-800">
                Fiyat: {ilan.price.toLocaleString()} {ilan.price > 10000 ? "TL" : "TL / Ay"}
                </p>
                <Link
                to={`/ilan/${ilan.id}`}
                className="inline-block mt-3 text-green-800 hover:underline">
                Detayları Gör
                </Link>
            </div>
            ))}
        </div>
        </section>
    </div>
  );
};

export default Listings;
