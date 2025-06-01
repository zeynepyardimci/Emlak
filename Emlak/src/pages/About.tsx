import FAQItem from "@/components/FAQItem";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
};

const About = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [team] = useState<TeamMember[]>([
    { id: 1, name: "Zeynep Yardımcı", role: "Yazılım Mühendisi" },
    { id: 2, name: "Ahmet Yardımcı", role: "Emlak Uzmanı" },
    { id: 3, name: "Mustafa Yardımcı", role: "Finansman" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTeam = useCallback(() => {
    if (sectionRef.current) {
      const yOffset = -105; // üstte sabit header varsa ona göre ayarla, yoksa 0 yapabilirsin
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);
  

  const memberCount = useMemo(() => team.length, [team]);

  if (loading) {
    return (
      <div className="bg-navbar min-h-screen flex items-center justify-center text-gray-600">
        Sayfa yükleniyor...
      </div>
    );
  }

  return (
    <div className="bg-tas min-h-screen py-10 px-4">
      <div className="bg-navbar max-w-3xl mx-auto p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-green-800 mb-4">🏠 Hakkımızda</h1>
        <p className="text-gray-700 mb-4">
          Modern teknolojiyi kullanarak emlak sektörüne yenilikçi çözümler sunuyoruz. Kullanıcı
          dostu arayüzümüz, detaylı ilan sistemimiz ile alıcı ve satıcıları buluşturuyoruz.
        </p>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-2">🎯 Misyonumuz</h2>
        <p className="text-gray-700 mb-4">
          Emlak sektöründe dijital dönüşümü destekleyerek, kullanıcıların güvenli ve hızlı bir şekilde alım-satım işlemlerini gerçekleştirmelerini sağlamak.
        </p>

        <h2 className="text-2xl font-semibold text-green-800 mb-2">🚀 Vizyonumuz</h2>
        <p className="text-gray-700 mb-6">
          Türkiye'nin en güvenilir, yenilikçi ve kullanıcı dostu emlak platformu olmak.
        </p>

        {/* Tanıtım Videosu */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">🎬Tanıtım Videomuz</h2>
          <video className="w-full h-64 rounded-xl border border-green-200 shadow-lg" controls preload="metadata">
            <source src="/videos/tanitim.mp4" type="video/mp4" />
            Tarayıcınız video öğesini desteklemiyor.
          </video>
        </div>

        {/* Ekibimiz */}
        <div ref={sectionRef}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Ekibimiz ({memberCount} kişi)
          </h3>
          <button
            onClick={scrollToTeam}
            className="mb-6 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow"
          >
            Ekibi Gör
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 my-6 text-center">
          <div>
            <p className="text-3xl font-bold text-green-800">+50</p>
            <p className="text-gray-600">😊 Mutlu Müşteri</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">10+</p>
            <p className="text-gray-600">📢 Aktif İlan</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-2">🤔Neden Bizi Tercih Etmelisiniz?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Modern ve kullanıcı dostu tasarım</li>
          <li>Hızlı ilan yönetimi</li>
          <li>Güvenli ve şeffaf işlem süreci</li>
          <li>Uzman destek ekibi</li>
        </ul>

        <div ref={sectionRef}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Ekibimiz ({memberCount} kişi)
          </h3>
          <ul className="space-y-2">
            {team.map((member) => (
              <li key={member.id} className="text-gray-700">
                👤 {member.name} – <span className="italic">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sık Sorulan Sorular */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-green-800 mb-4">❓ Sıkça Sorulan Sorular</h2>

          <div className="bg-tas rounded shadow p-6">
            <FAQItem
              question="📝 İlan nasıl eklenir?"
              answer="Emlakçılar için özel olarak oluşturduğumuz panel üzerinden giriş yaparak ilan ekleyebilirsiniz."
            />
            <FAQItem
              question="⏱️ İlanlar ne kadar sürede yayına alınır?"
              answer="İlanlar, kurallarımıza uygun olarak oluşturulduğu takdirde 5 dakika içinde yayına alınır."
            />
            <FAQItem
              question="👤 Siteye üye olmam gerekiyor mu?"
              answer="Hayır, kullanıcı olarak sadece ilanları görüntülemek istiyorsanız üyelik gerekmez."
            />
            <FAQItem
              question="📱 Mobil uygulamanız var mı?"
              answer="Şu an geliştirme aşamasında! Yakında App Store ve Google Play'de yerimizi alacağız."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
