import { useParams } from "react-router-dom";
import { useListing } from "@/context/ListingContext";
import ImageCarousel from "@/components/ImageCarousel";


const ListingDetail = () => {
  const { id } = useParams();
  const { getListingById } = useListing();

  const ilan = getListingById(id!);

  if (!ilan) {
    return <div className="p-6 text-center text-red-600">İlan bulunamadı.</div>;
  }

  return (
    <div className="bg-navbar max-w-3xl mx-auto p-6">
      <ImageCarousel images={ilan.images} />
      <h1 className="text-3xl font-bold text-green-800">{ilan.title}</h1>
      <p className="text-gray-600 mt-2">{ilan.description}</p>
      <p className="text-green-800 font-semibold mt-2">Fiyat: {ilan.price.toLocaleString()} TL</p>
      <p className="text-gray-500 mt-1">Konum: {ilan.location}</p>
      <p className="text-gray-500">Oda Sayısı: {ilan.roomCount}</p>
    </div>
  );
};

export default ListingDetail;

