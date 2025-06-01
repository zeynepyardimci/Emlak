import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Form şeması
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalı' }),
  phone: z.string().min(10, { message: 'Geçerli bir telefon numarası girin' }),
  message: z.string().min(10, { message: 'Mesaj en az 10 karakter olmalı' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // WhatsApp mesajını oluştur
      const message = `Merhaba, ben ${data.name}. Telefon numaram: ${data.phone}. Mesajım: ${data.message}`;
      
      // URL encode yaparak özel karakterleri temizle
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/905530543298?text=${encodedMessage}`;
      
      // Yeni sekmede aç
      window.open(whatsappUrl, '_blank');
      
      // Formu temizle
      reset();
    } catch (error) {
      console.error('Gönderim hatası:', error);
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  return (
    <div style={{ padding: '2rem' }} className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-6">İletişim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Sol Taraf - İletişim Bilgileri */}
        <div>
          <p className="mb-4">📍 Ofisimize aşağıdaki konumdan ulaşabilirsiniz:</p>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.2194009221907!2d35.806711!3d40.6470938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40876f8d4a01093b%3A0xf5623019a8345601!2zWUFSRElNQ0kgRU1MQUsgJiDEsE7FnkFBVA!5e0!3m2!1str!2str!4v1748271973740!5m2!1str!2str"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-green-800 mb-2">🕒 Çalışma Saatlerimiz</h2>
              <p className="text-gray-600">
                ◉ Pazartesi-Cuma: 09:00-20:00<br />
                ◉ Cumartesi: 10:00-20:00<br />
                ◉ Pazar: Kapalı
              </p>
            </div>

            <div>
              <h2 className="font-bold text-green-800 mb-2">📞 İletişim Bilgileri</h2>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://wa.me/905530543298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <img src="/src/assets/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                  WhatsApp: 0 553 054 32 98
                </a>
                <a
                  href="https://www.instagram.com/yardimciemlak05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <img src="/src/assets/instagram.svg" alt="Instagram" className="w-5 h-5 mr-2" />
                  Instagram: @yardimciemlak05
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - İletişim Formu */}
        <div className="bg-navbar p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Hızlı Mesaj Gönderin</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                İsim *
              </label>
              <input
                id="name"
                {...register('name')}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Adınız soyadınız"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="5__ ___ __ __"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız *
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Size nasıl yardımcı olabiliriz?"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>

            <p className="text-xs text-gray-500">
              * ile işaretli alanlar zorunludur. Mesajınız WhatsApp üzerinden iletilecektir.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;