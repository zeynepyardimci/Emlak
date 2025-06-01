import { Link } from "react-router-dom";

//Home sayfasındaki ilanlar
const ilanlar = [
  {
    id: 1,
    baslik: "3+1 Kiralık Lüks Daire",
    fiyat: "2.500.000 TL",
    konum: "Amasya / Şeyhcui",
    resim: "/src/assets/seyhcui.png",
  },
  {
    id: 2,
    baslik: "3+1 Satılık Lüks Daire",
    fiyat: "3.200.000 TL",
    konum: "Amasya / Hacılar Meydanı",
    resim: "/src/assets/hacilar.png",
  },
  {
    id: 3,
    baslik: "İstasyon Caddesinde 2+1 Daire",
    fiyat: "2.600.000 TL",
    konum: "Amasya / İstasyon Caddesi",
    resim: "/src/assets/istasyon.jpg",
  },
];

const FeaturedListings = () => {
  return (
    <section className="bg-kahve py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Öne Çıkan İlanlar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ilanlar.map((ilan) => (
            <div key={ilan.id} className="bg-tas rounded-lg shadow-md overflow-hidden">
              <img src={ilan.resim} alt={ilan.baslik} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{ilan.baslik}</h3>
                <p className="text-green-800 font-bold mt-1">{ilan.fiyat}</p>
                <p className="text-sm text-gray-500">{ilan.konum}</p>
                <Link to={`/ilan/${ilan.id}`} className="inline-block mt-3 text-sm text-white bg-green-800 hover:bg-green-700 px-4 py-2 rounded">
                  Detayları Gör
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
