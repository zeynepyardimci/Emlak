import { Link } from "react-router-dom";
import FeaturedListings from "./FeaturedListings";

const Home = () => {
  return (
    <div>
        <section className="bg-tas py-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            Hayalinizdeki Evi Bizimle Bulun
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Yardımcı Emlak ile aradığınız evi kolayca bulun, güvenle satın alın ya da kiralayın.
          </p>
          <Link
            to="/ilanlar"
            className="mt-6 inline-block bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            İlanlara Göz At
          </Link>
        </section>
        {/* Öne Çıkan İlanlar */}
        <FeaturedListings />
        <section className="bg-navbar py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Neden Yardımcı Emlak?</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-gray-700">
                <div>
                <h3 className="text-xl font-bold mb-2">Güvenilir Hizmet</h3>
                <p>Müşteri memnuniyetine dayalı hizmet anlayışı ile güveninizi kazanıyoruz.</p>
                </div>
                <div>
                <h3 className="text-xl font-bold mb-2">Geniş Portföy</h3>
                <p>Amasya'nın her yerinden farklı bütçelere uygun ilanlar sunuyoruz.</p>
                </div>
                <div>
                <h3 className="text-xl font-bold mb-2">Hızlı İşlem</h3>
                <p>Alım ve kiralama süreçlerini sizin için hızla tamamlıyoruz.</p>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Home;
