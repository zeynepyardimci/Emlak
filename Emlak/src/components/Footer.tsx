import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Sol: Logo */}
        <div>
        <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.jpg" alt="Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-green-800">Yardımcı Emlak</span>
        </Link>

          <p className="mt-2 text-sm text-gray-400">Emlakta En Doğru Adresiniz Biziz.</p>
        </div>

        {/* Orta: Sayfalar */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sayfalar</h3>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:text-hoverText">Ana Sayfa</NavLink></li>
            <li><NavLink to="/ilanlar" className="hover:text-hoverText">İlanlar</NavLink></li>
            <li><NavLink to="/hakkimizda" className="hover:text-hoverText">Hakkımızda</NavLink></li>
            <li><NavLink to="/iletisim" className="hover:text-hoverText">İletişim</NavLink></li>
          </ul>
        </div>

        {/* Sağ: İletişim */}
        <div>
          <h3 className="text-lg font-semibold mb-2">İletişim</h3>
          <div className="flex flex-col space-y-2">
            <a
                href="https://wa.me/905530543298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-green-600 transition-colors hover:underline">
                <img src="/src/assets/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 mr-2" />
                WhatsApp: 0 553 054 32 98
            </a>
            <a
                href="https://www.instagram.com/yardimciemlak05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-green-600 transition-colors hover:underline">
                <img src="/src/assets/instagram.svg" alt="Instagram" className="w-4 h-4 mr-2" />
                Instagram: @yardimciemlak05
            </a>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} YardımcıEmlakSitesi. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
