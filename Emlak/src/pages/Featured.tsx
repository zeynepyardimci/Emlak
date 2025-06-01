// import { Link } from "react-router-dom";
// import { ilanlar } from "src/context/ListingContext";

// const Featured = () => {
//   return (
//     <section className="py-12 px-4 bg-white">
//       <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Öne Çıkan İlanlar</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {ilanlar.map((ilan) => (
//           <div key={ilan.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
//             <img src={ilan.image} alt={ilan.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="text-xl font-semibold mt-2">{ilan.title}</h3>
//             <p className="text-green-600 font-bold">{ilan.price}</p>
//             <p className="text-sm text-gray-500">{ilan.location}</p>
//             <Link
//               to={`/ilan/${ilan.id}`}
//               className="inline-block mt-3 text-sm text-green-700 hover:underline"
//             >
//               Detayları Gör
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Featured;
